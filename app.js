if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrap.js");
const Review = require("./models/review.js");
const Listing = require("./models/listing.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
// const multer  = require('multer');
const { storage } = require("./cloud.js");
// const upload = multer({ storage });
const { listingSchema } = require("./schema.js");
const { isLoggedIn } = require("./middleware.js");
const {
  saveRedirectUrl,
  isOwner,
  validateListing,
  validateReview,
  isReviewauthor,
} = require("./middleware.js");
// const fetch = require("node-fetch");
const listingController = require("./controller/List.js");
const multer = require("multer");
// const path = require('path');
const pdf = require("pdfkit");
const fs = require("fs");
// const path = require("path");
const nodemailer = require("nodemailer");
const Booking = require("./models/booking.js");

const mongo_url = process.env.MONGO_URL;

main()
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const sessionOption = {
  secret: "mysecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

// ✅ Storage configuration
const listingStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "public/uploads")); // save in public/uploads
  },
  filename: function (req, file, cb) {
    // Unique filename: timestamp-originalname
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// ✅ File filter to allow only images
const imageFilter = function (req, file, cb) {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

// ✅ Multer upload instance (max 5 files)
const upload = multer({
  storage: listingStorage,
  fileFilter: imageFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // optional: max 5MB per file
});

// app.get("/", (req , res ) =>{
//     res.send("Hi I am root");
// });

app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//local-passport
app.use((req, res, next) => {
  res.locals.succes = req.flash("succes");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// Full search page
app.get("/listings/search", async (req, res) => {
  const query = req.query.q?.trim();
  if (!query) {
    req.flash("error", "Please enter a search term!");
    return res.redirect("/listings");
  }

  const results = await Listing.find({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { location: { $regex: query, $options: "i" } },
      { country: { $regex: query, $options: "i" } },
    ],
  });

  res.render("listings/searchResults.ejs", { results, query });
});

// Live search (AJAX)
app.get("/listings/live-search", async (req, res) => {
  const query = req.query.q?.trim();
  if (!query) return res.json({ results: [] });

  const results = await Listing.find({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { location: { $regex: query, $options: "i" } },
      { country: { $regex: query, $options: "i" } },
    ],
  })
    .select("title location country images")
    .limit(5);

  res.json({ results });
});

//User SignUP
app.get("/signup", (req, res) => {
  res.render("user/signup.ejs");
});

//User Post req
app.post(
  "/signup",
  wrapAsync(async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const registerUser = await User.register(newUser, password);
      console.log(registerUser);
      req.login(registerUser, (err) => {
        if (err) {
          return next(err);
        }
        req.flash("succes", "Welcome to Wanderlust");
        res.redirect("/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  }),
);

//login Route
app.get("/login", (req, res) => {
  res.render("user/login.ejs");
});

//Logout
app.get("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("succes", "you are loged out");
    res.redirect("/listings");
  });
});

app.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  async (req, res) => {
    req.flash("succes", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  },
);

//index route
app.get("/listings", async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index", { allListing });
});

//New ROute
app.get("/listings/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});
//PRofile Route
app.get("/profile", isLoggedIn, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).lean();

    // ✅ Populate listing and owner details
    const bookings = await Booking.find({ user: req.user._id })
      .populate({
        path: "listing",
        select: "title price location images owner",
        populate: { path: "owner", select: "username email" },
      })
      .sort({ createdAt: -1 })
      .lean();

    res.render("listings/profile.ejs", { user, bookings });
  } catch (err) {
    console.error("❌ Error loading profile:", err);
    req.flash("error", "Unable to load profile page.");
    res.redirect("/listings");
  }
});

//Show Route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const Listing = await listing
      .findById(id)
      .populate({ path: "reviews", populate: { path: "author" } })
      .populate("owner");
    if (!Listing) {
      req.flash("error", "Listing you requested does not exist");
      res.redirect("/listings");
    }
    res.render("listings/show.ejs", { Listing });
  }),
);

//Create Route
app.post(
  "/listings",
  isLoggedIn,
  upload.array("listing[images]", 5), // ✅ 5 images max
  validateListing,
  wrapAsync(async (req, res) => {
    try {
      const { title, description, price, country, location, lat, lng } =
        req.body.listing;

      if (!location) {
        req.flash("error", "Location is required!");
        return res.redirect("/listings/new");
      }

      // ✅ Create geometry if coordinates exist
      let geometry = null;
      if (lat && lng) {
        geometry = {
          type: "Point",
          coordinates: [parseFloat(lng), parseFloat(lat)],
        };
      }

      // ✅ Create new listing
      const newListing = new Listing({
        title,
        description,
        price,
        country,
        location,
        geometry,
        owner: req.user._id,
      });

      // ✅ Attach uploaded images
      if (req.files && req.files.length > 0) {
        newListing.images = req.files.map((file) => ({
          url: "/uploads/" + file.filename,
          filename: file.filename,
        }));
      }

      await newListing.save();
      req.flash("success", "Listing created successfully!");
      res.redirect(`/listings/${newListing._id}`);
    } catch (err) {
      console.error(err);
      req.flash("error", "Something went wrong!");
      res.redirect("/listings/new");
    }
  }),
);

//Edit Route
app.get(
  "/listings/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listings = await listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested does not exist");
      res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listings });
  }),
);

//Update Route
app.put(
  "/listings/:id",
  isLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
      let url = req.file.path;
      let filename = req.file.filename;
      listing.image = { url, filename };
      await listing.save();
    }
    res.redirect(`/listings/${id}`);
  }),
);

//Delete Route
app.delete(
  "/listings/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deleted = await Listing.findByIdAndDelete(id);
    console.log(deleted);
    req.flash("succes", "Listing Deleted!");
    res.redirect("/listings");
  }),
);

//Reviews
//Post ROute
app.post(
  "/listings/:id/reviews",
  isLoggedIn,
  validateReview,
  wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("succes", "New Review Added!");
    res.redirect(`/listings/${listing._id}`);
  }),
);

// await newListing.save();
// req.flash("succes", "New Listing Created!");
// res.redirect("/listings");

//Delete Review Route
app.delete(
  "/listings/:id/reviews/:reviewID",
  isLoggedIn,
  isReviewauthor,
  wrapAsync(async (req, res) => {
    let { id, reviewID } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewID } });
    await Review.findByIdAndDelete(reviewID);
    req.flash("succes", "Review Deleted!");
    res.redirect(`/listings/${id}`);
  }),
);

// 🟢 Booking Form Page
app.get("/listings/:id/book", isLoggedIn, async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }
  res.render("listings/book.ejs", { listing });
});
app.get("/listings/:id/check-availability", async (req, res) => {
  try {
    const { id } = req.params;
    const { checkIn, checkOut } = req.query;

    if (!checkIn || !checkOut) {
      return res.json({ available: false, message: "Missing dates" });
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const overlapping = await Booking.findOne({
      listing: id,
      $or: [{ checkIn: { $lte: end }, checkOut: { $gte: start } }],
    });

    if (overlapping) {
      return res.json({
        available: false,
        message: "🚫 This villa is already booked for those dates.",
      });
    }

    res.json({ available: true, message: "✅ This villa is available!" });
  } catch (err) {
    console.error(err);
    res.json({ available: false, message: "Server error" });
  }
});

// ✅ Check Availability (AJAX)
app.get("/listings/:id/check-availability", async (req, res) => {
  try {
    const { id } = req.params;
    const { checkIn, checkOut } = req.query;

    if (!checkIn || !checkOut) {
      return res
        .status(400)
        .json({ available: false, message: "Missing dates." });
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    // 🔍 Check if any booking overlaps with given range
    const overlapping = await Booking.findOne({
      listing: id,
      $or: [{ checkIn: { $lte: end }, checkOut: { $gte: start } }],
    });

    if (overlapping) {
      return res.json({
        available: false,
        message: "❌ This villa is already booked for those dates.",
      });
    }

    res.json({ available: true, message: "✅ This villa is available!" });
  } catch (err) {
    console.error("Availability check error:", err);
    res.status(500).json({
      available: false,
      message: "Server error checking availability.",
    });
  }
});

// ✅ Handle Booking Submission
// Function to strip time from a date (to compare by day only)
function normalizeDate(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

app.post("/listings/:id/book", isLoggedIn, async (req, res) => {
  try {
    const listingId = req.params.id;
    const {
      dateRange,
      adults,
      children,
      infants,
      pets,
      decorations,
      events,
      amount,
    } = req.body;

    // Parse dateRange like "2025-10-22 to 2025-10-24"
    if (!dateRange || !dateRange.includes(" to ")) {
      req.flash(
        "error",
        "❌ Please select valid check-in and check-out dates.",
      );
      return res.redirect(`/listings/${listingId}/book`);
    }

    let [checkIn, checkOut] = dateRange.split(" to ").map((d) => d.trim());
    const start = normalizeDate(checkIn);
    const end = normalizeDate(checkOut);

    // ✅ Ensure checkIn < checkOut
    if (start >= end) {
      req.flash("error", "❌ Check-out date must be after check-in date.");
      return res.redirect(`/listings/${listingId}/book`);
    }

    // 🔍 Check for overlapping booking for the same villa
    const overlappingBooking = await Booking.findOne({
      listing: listingId,
      $or: [
        {
          checkIn: { $lte: end },
          checkOut: { $gte: start },
        },
      ],
    });

    console.log("Overlap check →", {
      listingId,
      start,
      end,
      overlappingBooking: !!overlappingBooking,
    });

    // 🚫 If an overlap exists, block the booking
    if (overlappingBooking) {
      req.flash(
        "error",
        "🚫 This villa is already booked for the selected dates.",
      );
      return res.redirect(`/listings/${listingId}/book`);
    }

    // ✅ Save new booking
    const newBooking = new Booking({
      listing: listingId,
      user: req.user._id,
      checkIn: start,
      checkOut: end,
      adults: parseInt(adults) || 0,
      children: parseInt(children) || 0,
      infants: parseInt(infants) || 0,
      pets: parseInt(pets) || 0,
      decorations: Array.isArray(decorations)
        ? decorations
        : decorations
          ? [decorations]
          : [],
      events: Array.isArray(events) ? events : events ? [events] : [],
      amount: parseFloat(amount) || 0,
    });

    await newBooking.save();

    console.log("✅ Booking confirmed:", newBooking);

    req.flash("success", "🎉 Booking confirmed successfully!");
    res.redirect(`/listings/${listingId}`);
  } catch (err) {
    console.error("❌ Booking error:", err);
    req.flash("error", "Something went wrong while booking. Try again!");
    res.redirect(`/listings`);
  }
});

// 🟢 Payment Page
// app.get("/listings/:id/payment", isLoggedIn, async (req, res) => {
//   const listing = await Listing.findById(req.params.id);
//   if (!listing) {
//     req.flash("error", "Listing not found!");
//     return res.redirect("/listings");
//   }

//   // Fetch last booking for this user and listing
//   const lastBooking = await Booking.findOne({
//     user: req.user._id,
//     listing: listing._id,
//   }).sort({ createdAt: -1 });

//   res.render("listings/payment.ejs", { listing, booking: lastBooking });
// });

// 🟢 Handle Payment Submission (dummy)
app.post("/listings/:id/payment", isLoggedIn, async (req, res) => {
  try {
    console.log("💳 Payment details:", req.body);
    req.flash("success", "Payment successful! Booking confirmed.");
    res.redirect(`/users/${req.user._id}/bookings`);
  } catch (err) {
    console.error(err);
    req.flash("error", "Payment failed!");
    res.redirect(`/listings/${req.params.id}`);
  }
});

// 🟢 Booking History Page (for logged-in user)
app.get("/users/:id/bookings", isLoggedIn, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.params.id })
      .populate("listing")
      .sort({ createdAt: -1 });

    res.render("users/bookings.ejs", { bookings });
  } catch (err) {
    console.error(err);
    req.flash("error", "Cannot load booking history!");
    res.redirect("/listings");
  }
});
app.post("/bookings", async (req, res) => {
  try {
    const bookingData = req.body;
    const booking = new Booking(bookingData);
    await booking.save();
    res.status(201).json({ success: true, booking });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, error: err.message });
  }
});

app.get("/booking/success", (req, res) => {
  res.render("listings/bookingSuccess", { title: "Booking Successful" });
});

app.all("", (req, res, next) => {
  next(new ExpressError("Page not Found!", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

//port
app.listen(8080, (req) => {
  console.log("Server is working on port 8080");

});
