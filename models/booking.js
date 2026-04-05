// models/booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: true,
  },
  checkIn: Date,
  checkOut: Date,
  adults: { type: Number, default: 0 },
  children: { type: Number, default: 0 },
  infants: { type: Number, default: 0 },
  pets: { type: Number, default: 0 },
  decorations: { type: [String], default: [] },
  events: { type: [String], default: [] },
  amount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
