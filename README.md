# Wanderlust 🏕️

> A full‑stack web application for booking unique outdoor stays & experiences — inspired by Airbnb.

&#x20;

### Live Demo

[🌐 Visit Wanderlust](https://del-project-1.onrender.com/listings)

## Table of Contents

* [About](#about)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [Contact](#contact)

## About

Wanderlust helps travellers discover and book unique stays hosted by local property owners. Hosts can list their spaces, upload photos, set nightly rates and manage reservations, while guests can browse listings, refine results with filters, read reviews and book securely. The project was built using core backend technologies like Express.js and MongoDB, and server-side rendering with EJS templates.

## Features

### Guest

* 🔍 Search listings with location and date filters
* 📅 Book stays securely
* ⭐ Leave and read reviews
* 🗑️ Delete their own reviews

### Host

* 📸 Upload images for listings
* 🗂️ Add, edit, and delete listings
* 📈 View bookings and manage availability

### Common

* 🔐 User authentication using sessions or JWT
* 🌙 Responsive UI using EJS and CSS

## Tech Stack

| Category   | Technology                   |
| ---------- | ---------------------------- |
| Front‑end  | HTML5, CSS3, EJS Templates   |
| Back‑end   | Node.js, Express.js, MongoDB |
| Auth       | Express-session/JWT          |
| Storage    | Cloudinary (for images)      |
| Deployment | Render                       |

## Getting Started

```bash
# 1️⃣ Clone the repo
git clone https://github.com/Whozmayank/Del-Project.git
cd Del-Project

# 2️⃣ Install dependencies
npm install

# 3️⃣ Create .env file
cp .env.example .env
# then fill in your environment variables

# 4️⃣ Run the app
npm start
```

The server will run on `http://localhost:8080`.

### Environment Variables

```bash
PORT=3000
MONGO_URI=mongodb+srv://...
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
SESSION_SECRET=yourSecret
```

## Project Structure

```
.
├── public/           # Static files (CSS, JS, images)
├── routes/           # Express routes
├── views/            # EJS templates
├── models/           # Mongoose schemas
├── controllers/      # Request handlers
├── middleware/       # Auth & other middlewares
├── .env              # Environment configuration
├── app.js            # Main Express app
└── README.md
```

## Contact

💌 Mayank Tomar – linkedin( Mayank Tomar ) – Email(mayanktomar878@gmail.com)

Project Link: [https://github.com/Whozmayank/Del-Project](https://github.com/Whozmayank/Del-Project)
