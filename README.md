🏡 Wanderlust – Online Villa Booking System
Wanderlust is a full-stack web application that allows users to explore, list, and book villas online.
It provides a seamless experience for both villa owners and travelers with features like authentication, image uploads, booking management, and reviews.

🚀 Features
🔐 User Authentication (Signup/Login/Logout)
🏠 Create, Edit, Delete Villa Listings
🖼️ Upload Multiple Images (Multer)
🔍 Search & Live Search Functionality
⭐ Add & Delete Reviews
📅 Booking System with Date Availability Check
👤 User Profile with Booking History
💳 Basic Payment Simulation
📢 Flash Messages for User Feedback
🛡️ Secure Sessions with Passport.js

🛠️ Tech Stack
Frontend:
EJS (Embedded JavaScript Templates)
HTML, CSS, JavaScript
Backend:
Node.js
Express.js
Database:
MongoDB with Mongoose
Authentication:
Passport.js (Local Strategy)
Other Tools & Libraries:
Multer (File Upload)
Cloudinary (Storage - configured)
Express Session & Connect-Mongo
Connect Flash
Method Override

📂 Project Structure
Wanderlust/
│
├── models/           # Mongoose Models (User, Listing, Review, Booking)
├── views/            # EJS Templates
├── public/           # Static Files (CSS, JS, Images)
├── routes/           # Route Handlers
├── controller/       # Business Logic
├── middleware/       # Custom Middleware
├── utils/            # Helper Functions
├── app.js            # Main Server File
└── .env              # Environment Variables

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables
Create a .env file and add:
MONGO_URL=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
4️⃣ Run the Application
node app.js
Server will run on:
http://localhost:8080

📌 Key Functionalities
🏠 Listings
View all villas
Create new listings with images
Edit & delete listings (only owner)
🔍 Search
Full search (title, location, country)
Live search with AJAX
⭐ Reviews
Add reviews to listings
Delete reviews (only author)
📅 Booking System
Check availability (prevents overlapping bookings)
Book villas with date range
Store booking details in database
👤 User Profile
View personal details
View booking history
🔒 Authentication Flow
Uses Passport.js Local Strategy
Sessions stored using MongoDB
Protected routes using middleware
📸 Image Upload
Multiple images supported (max 5)
Stored locally in /public/uploads
Only image files allowed

⚠️ Error Handling
Custom error handling middleware
Flash messages for better UX
Handles invalid routes (404)
📈 Future Enhancements
💳 Real Payment Integration (UPI/Stripe)
📍 Map Integration (Google Maps)
☁️ Cloud Image Storage (Full Cloudinary integration)
📱 Responsive UI improvements
📊 Admin Dashboard

🤝 Contributing
Contributions are welcome!
Fork the repo
Create a new branch
Make your changes
Submit a pull request

📜 License
This project is licensed under the MIT License.
👨‍💻 Author:
Aman Pandey
⭐ Support
If you like this project, give it a ⭐ on GitHub!
