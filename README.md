# OneCart

OneCart is a full‑stack e‑commerce application with a customer storefront, an admin dashboard, and an Express/MongoDB backend API. It supports user authentication (including Google), product management, cart, orders, and Razorpay payments.

## Apps & Folders
- backend/ — Express API + MongoDB + Cloudinary + Razorpay
- frontend/ — Customer storefront (Vite + React)
- admin/ — Admin dashboard (Vite + React)
- render-build.sh — Render build script for frontend

## Features
- User registration/login (JWT + cookies)
- Google sign‑in (Firebase Auth)
- Product listing, cart, checkout
- Order placement (COD & Razorpay)
- Admin order management
- Cloudinary image uploads

## Tech Stack
- Frontend/Admin: React, Vite, Tailwind CSS, Axios, React Router
- Backend: Node.js, Express, MongoDB (Mongoose), JWT, Cloudinary, Razorpay
- Auth: Firebase (Google OAuth), HTTP‑only cookies

## Environment Variables
Create a .env file in backend/ with:
```
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=strong_password
# Optional
PORT=6000
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:5174
```

Create a .env file in frontend/ with:
```
VITE_SERVER_URL=http://localhost:6000
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Create a .env file in admin/ with:
```
VITE_SERVER_URL=http://localhost:6000
```

## Install & Run (Local)
From the repo root:

### Backend
```
cd backend
npm install
npm run dev
```

### Frontend (Storefront)
```
cd frontend
npm install
npm run dev
```

### Admin
```
cd admin
npm install
npm run dev
```

## Build
Frontend build (used by Render):
```
npm run build
```
This runs render-build.sh which installs deps and builds the frontend.

## API Summary
Base path: /api

- /api/auth — registration, login, logout, google login, admin login
- /api/user — current user, admin user
- /api/product — product CRUD
- /api/cart — cart operations
- /api/order — order placement, Razorpay, order status

## Deployment (Render)
- Backend: deploy backend/ as a Node service (set .env vars above).
- Frontend: deploy frontend/ as a static site (or use render-build.sh).
- Admin: deploy admin/ as a static site.

Ensure ALLOWED_ORIGINS includes your deployed frontend/admin URLs.

## Notes
- Auth uses HTTP‑only cookies with SameSite=None; secure cookies require HTTPS in production.
- Razorpay client uses VITE_RAZORPAY_KEY_ID; server uses RAZORPAY_KEY_ID/SECRET.
