# 🏡 Wanderlust – Villa Booking Platform

A modern full-stack villa booking platform inspired by Airbnb, built using **Node.js, Express.js, MongoDB, and EJS**. The platform enables users to discover unique villas, create listings, upload images, leave reviews, and manage bookings through a secure authentication system.

---

## 📌 Overview

Wanderlust is a full-stack web application that allows property owners to publish villa listings while enabling travelers to explore accommodations from different locations.

The project follows the **MVC Architecture** and includes authentication, authorization, image uploads, location mapping, reviews, session management, and responsive UI.

---

## ✨ Features

### 👤 Authentication

- User Registration
- Secure Login & Logout
- Password Encryption
- Session Management
- Authorization Middleware

### 🏡 Villa Listings

- Create New Listings
- Edit Existing Listings
- Delete Listings
- View Listing Details
- Responsive Listing Cards

### 📷 Image Upload

- Cloudinary Image Storage
- Multiple Image Upload Support
- Optimized Image Delivery

### ⭐ Reviews

- Add Reviews
- Ratings System
- Delete Own Reviews

### 📍 Maps & Location

- OpenStreetMap Integration
- Automatic Geocoding
- Location Preview

### 🛡️ Security

- Input Validation using Joi
- Authentication using Passport.js
- Secure Sessions
- Error Handling
- Flash Messages

### 📱 User Experience

- Responsive Design
- Mobile Friendly
- Clean Bootstrap UI
- Dynamic EJS Templates

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- Bootstrap
- JavaScript
- EJS

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- Passport.js
- Passport Local
- Express Session

## Cloud Services

- Cloudinary
- OpenStreetMap
- Nominatim API

---

# 📂 Project Structure

```
wanderlust-villa-booking
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── middleware.js
├── cloudConfig.js
├── app.js
├── package.json
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Aman-Pandey-13/wanderlust-villa-booking.git
```

Move into project

```bash
cd wanderlust-villa-booking
```

Install dependencies

```bash
npm install
```

Create `.env`

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name

CLOUD_API_KEY=your_cloudinary_api_key

CLOUD_API_SECRET=your_cloudinary_api_secret
```

Start Development Server

```bash
npm start
```

or

```bash
nodemon app.js
```

Open

```
http://localhost:8080/listing
```

---



# 📦 Major NPM Packages

- Express
- Mongoose
- Passport
- Passport-local
- Passport-local-mongoose
- Express-session
- Connect-flash
- Connect-mongo
- Joi
- Multer
- Cloudinary
- Multer-storage-cloudinary
- Dotenv
- Method-override
- EJS-Mate

---

# 📚 Concepts Used

- MVC Architecture
- RESTful Routing
- CRUD Operations
- Authentication & Authorization
- Middleware
- Sessions & Cookies
- Form Validation
- File Upload
- Image Storage
- Database Relationships
- Error Handling

---

# 🔮 Future Enhancements

- Online Payment Gateway
- Wishlist
- Booking Calendar
- Availability Checker
- Search & Filters
- AI Recommendation System
- Email Notifications
- Admin Dashboard
- Real-Time Chat

---

# 👨‍💻 Author

**Aman Pandey**

📧 Email

```
pandeyaman995@gmail.com
```

🔗 GitHub

```
https://github.com/Aman-Pandey-13
```

🔗 LinkedIn

```
(Add your LinkedIn URL)
```

---

# ⭐ Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub!
