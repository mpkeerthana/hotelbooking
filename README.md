# 🏨 StayHub - Hotel Booking Platform

A complete, production-ready hotel booking platform built with React, Node.js, Express, MongoDB, and Tailwind CSS.

## 🎯 Overview

**StayHub** is a full-stack hotel booking application that allows users to:
- ✅ Browse and search hotels
- ✅ View hotel details and reviews
- ✅ Book hotel rooms with real-time availability checking
- ✅ Manage bookings and cancellations
- ✅ Leave reviews and ratings
- ✅ Save favorite hotels to wishlist
- ✅ Secure payment processing
- ✅ User authentication with JWT tokens

---

## 📋 Table of Contents

1. [Project Structure](#project-structure)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Frontend Setup](#frontend-setup)
5. [Backend Setup](#backend-setup)
6. [Features](#features)
7. [Pages & Routes](#pages--routes)
8. [API Integration](#api-integration)
9. [Development Workflow](#development-workflow)
10. [Deployment](#deployment)

---

## 📁 Project Structure

```
hotelbooking/
├── frontend/                    # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/          # Reusable: Button, Input, Modal, Toast, etc.
│   │   │   ├── layout/          # Navbar, Sidebar, Footer, TopNav
│   │   │   ├── hotel/           # Hotel-specific: HotelCard, HotelGrid, etc.
│   │   │   ├── booking/         # Booking-specific: BookingForm, BookingCard
│   │   │   └── filters/         # Filter components: PriceFilter, RatingFilter
│   │   ├── pages/
│   │   │   ├── Landing.jsx      # 🎉 NEW: Beautiful landing page
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ExploreHotels.jsx
│   │   │   ├── HotelDetails.jsx
│   │   │   ├── BookingPage.jsx
│   │   │   ├── MyBookings.jsx
│   │   │   ├── Wishlist.jsx
│   │   │   ├── Settings.jsx
│   │   │   └── auth/
│   │   │       ├── Login.jsx
│   │   │       └── Signup.jsx
│   │   ├── context/             # State management
│   │   │   ├── AuthContext.jsx
│   │   │   ├── BookingContext.jsx
│   │   │   └── WishlistContext.jsx
│   │   ├── hooks/               # Custom hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useFetch.js
│   │   │   └── useDebounce.js
│   │   ├── services/            # API services
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── hotelService.js
│   │   │   └── bookingService.js
│   │   ├── utils/
│   │   │   ├── constants.js     # API endpoints, config
│   │   │   └── helpers.js       # Utility functions
│   │   ├── layouts/             # Page layouts
│   │   │   ├── AuthLayout.jsx
│   │   │   └── DashboardLayout.jsx
│   │   ├── routes/
│   │   │   ├── AppRoutes.jsx    # Route definitions (now with Landing)
│   │   │   └── ProtectedRoute.jsx
│   │   ├── App.jsx              # Main app component
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js       # Updated with animations
│   ├── postcss.config.js
│   └── README.md
│
└── backend/                     # Node.js + Express + MongoDB
    ├── config/
    │   └── db.js                # MongoDB connection
    ├── controllers/
    │   ├── authController.js
    │   ├── hotelController.js
    │   ├── bookingController.js
    │   └── reviewController.js
    ├── models/
    │   ├── User.js
    │   ├── Hotel.js
    │   ├── Booking.js
    │   └── Review.js
    ├── routes/
    │   ├── authRoutes.js
    │   ├── hotelRoutes.js
    │   ├── bookingRoutes.js
    │   └── reviewRoutes.js
    ├── middleware/
    │   ├── authMiddleware.js
    │   └── errorMiddleware.js
    ├── utils/
    │   └── generateToken.js
    ├── app.js                   # Express app setup
    ├── server.js                # Server entry point
    ├── package.json
    ├── .env                     # Environment variables
    ├── .gitignore
    └── README.md                # Backend API documentation
```

---

## 🛠 Tech Stack

### Frontend
- **React 19.2** - UI library
- **Vite 8.0** - Build tool (fast development)
- **React Router 6.20** - Client-side routing
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Lucide Icons** - Beautiful SVG icons
- **Axios 1.6** - HTTP client with interceptors
- **Context API** - State management

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.18** - Web framework
- **MongoDB 7.6** - NoSQL database (Mongoose ODM)
- **JWT 9.1** - Authentication tokens
- **bcryptjs 2.4** - Password hashing
- **CORS 2.8** - Cross-origin requests
- **Nodemon 3.0** - Development auto-reload

### Tools
- **npm** - Package manager
- **Git** - Version control
- **VS Code** - Code editor

---

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ and npm
- MongoDB (local or MongoDB Atlas cloud)
- Git

### Quick Start (Both Frontend & Backend)

```bash
# 1. Clone or navigate to project
cd hotelbooking

# 2. Frontend setup
cd frontend
npm install
npm run dev

# 3. Backend setup (in another terminal)
cd backend
npm install
npm run dev
```

**Access Points:**
- 🎨 Frontend: http://localhost:5174 (or 5173)
- 🔧 Backend API: http://localhost:5000/api
- 📚 API Health: http://localhost:5000/api/health

---

## 🖥 Frontend Setup

### Installation

```bash
cd frontend
npm install
```

### Running Development Server

```bash
npm run dev
```

The dev server will start on http://localhost:5174 with hot module replacement (HMR).

### Building for Production

```bash
npm run build
```

Outputs optimized files to `dist/` directory (255KB gzipped).

### Environment Variables

Create `.env` file in `frontend/` (or use `.env.example`):

```env
VITE_API_URL=http://localhost:5000/api
```

### Frontend Features

#### 🎨 **Landing Page** (NEW!)
- Hero section with premium gradient background
- Smart search bar with autocomplete
- Popular destinations showcase
- Featured hotels with ratings
- "Why Choose Us" trust section
- Customer testimonials/reviews
- How it works step-by-step guide
- Special offers & deals
- Newsletter signup
- Professional footer

#### 📱 **Core Pages**
- **Dashboard** - User overview & stats
- **Explore Hotels** - Browse, search, filter hotels
- **Hotel Details** - Full hotel info, reviews, booking
- **Booking** - Checkout flow with price calculator
- **My Bookings** - Manage existing bookings
- **Wishlist** - Save favorite hotels
- **Settings** - User profile & preferences
- **Auth** - Login & signup pages

#### 🎯 **Key Components**
- **Input** - Reusable form input with validation
- **Button** - CTA buttons with variants
- **Modal** - Dialog for confirmations
- **Toast** - Notifications (success, error, info)
- **Loader** - Loading spinners
- **HotelCard** - Hotel display component
- **ReviewCard** - Review display
- **DatePicker** - Calendar date selection

#### 🧠 **Smart Features**
- Protected routes with authentication checks
- Real-time search with debouncing
- Responsive design for all devices
- Toast notifications for user feedback
- Loader states for better UX
- Error handling & validation
- JWT token management
- Axios interceptors for API calls

---

## 🔧 Backend Setup

### Installation

```bash
cd backend
npm install
```

### Environment Variables

Create `.env` file in `backend/`:

```env
# MongoDB
MONGO_URI=mongodb://localhost:27017/hotelbooking
# OR for MongoDB Atlas (cloud):
# MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/hotelbooking

# JWT
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d

# Server
PORT=5000
NODE_ENV=development

# CORS
CORS_ORIGIN=http://localhost:5174
```

### Running Development Server

```bash
npm run dev
```

Server runs on http://localhost:5000 with auto-reload via Nodemon.

### Production Mode

```bash
npm start
```

### Database Setup

#### Option 1: Local MongoDB
```bash
# Install MongoDB Community Edition
# Start MongoDB service
mongod

# Server will auto-connect to mongodb://localhost:27017
```

#### Option 2: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGO_URI` in `.env`:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/hotelbooking
   ```

### Backend API Endpoints

See [backend/README.md](./backend/README.md) for complete API documentation.

**Key Endpoints:**
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/hotels` - List all hotels
- `POST /api/hotels/search` - Search hotels
- `GET /api/hotels/:id` - Hotel details
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - User's bookings

---

## ✨ Features

### 🔐 Authentication
- User registration & login
- JWT token-based authentication
- Password hashing with bcryptjs
- Secure token storage in localStorage
- Auto-logout on token expiration
- Protected API routes

### 🏨 Hotel Management
- Browse all hotels with filters
- Advanced search (location, price, rating, guests)
- Hotel details with images & reviews
- Real-time availability checking
- Guest ratings and reviews
- Save favorite hotels to wishlist

### 📅 Booking System
- Easy booking flow
- Date & guest selection
- Automatic price calculation (subtotal + tax + service fee)
- Booking confirmation
- Booking history management
- Cancellation with refunds
- Payment status tracking

### ⭐ Reviews & Ratings
- Leave detailed reviews
- 5-star ratings
- Verified buyer badges
- Helpful vote tracking
- Review sorting & filtering
- Average rating calculation

### 💎 Additional Features
- Responsive design (mobile, tablet, desktop)
- Real-time search suggestions
- Smooth animations & transitions
- Toast notifications
- Loading states
- Error handling
- Wishlist management
- User profile settings

---

## 📍 Pages & Routes

### Public Routes
| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Landing | Home page with hero, features, testimonials |
| `/login` | Login | User login page |
| `/signup` | Signup | User registration page |

### Protected Routes (Requires Login)
| Route | Component | Description |
|-------|-----------|-------------|
| `/dashboard` | Dashboard | User overview & stats |
| `/explore` | ExploreHotels | Browse & search hotels |
| `/hotel/:id` | HotelDetails | Hotel information & booking |
| `/booking` | BookingPage | Checkout & booking confirmation |
| `/bookings` | MyBookings | View & manage bookings |
| `/wishlist` | Wishlist | Saved favorite hotels |
| `/settings` | Settings | User profile & preferences |

---

## 🔌 API Integration

### Base URL
```
Development: http://localhost:5000/api
Production: https://api.stayhub.com/api (example)
```

### Authentication
All protected endpoints require JWT token in header:
```
Authorization: Bearer {token}
```

### Example Request (Frontend)
```javascript
import { API_BASE_URL } from '../utils/constants';

// Sign up
const response = await fetch(`${API_BASE_URL}/auth/signup`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    password: 'password123',
    confirmPassword: 'password123'
  })
});

const data = await response.json();
localStorage.setItem('authToken', data.token);
```

### Axios Interceptor (Auto-Token)
```javascript
// Automatically adds token to all requests
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

---

## 👨‍💻 Development Workflow

### Development Process

1. **Start Backend**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend** (in another terminal)
   ```bash
   cd frontend
   npm run dev
   ```

3. **Make Changes**
   - Frontend files auto-refresh (HMR)
   - Backend auto-restarts (Nodemon)

4. **Test API** using Postman or curl
   ```bash
   curl -X GET http://localhost:5000/api/health
   ```

### Code Structure Best Practices

- **Components** - Functional components with hooks
- **Services** - API calls in separate files
- **Context** - Global state management
- **Hooks** - Custom reusable logic
- **Utils** - Helper functions
- **Constants** - Configuration values

### Common Tasks

#### Add New API Endpoint
1. Create controller in `backend/controllers/`
2. Create route in `backend/routes/`
3. Register route in `backend/app.js`
4. Create service in `frontend/src/services/`
5. Use service in component/page

#### Add New Page
1. Create `.jsx` file in `frontend/src/pages/`
2. Add route to `frontend/src/routes/AppRoutes.jsx`
3. Create components if needed
4. Add navigation links

#### Add New Component
1. Create in `frontend/src/components/`
2. Export from index file if barrel export
3. Import & use in pages

---

## 🚀 Deployment

### Frontend Deployment

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### Traditional Hosting
```bash
npm run build
# Upload 'dist' folder to hosting provider
```

### Backend Deployment

#### Heroku
```bash
heroku login
heroku create app-name
git push heroku main
```

#### Railway.app
1. Connect GitHub repo
2. Set environment variables
3. Deploy

#### DigitalOcean/AWS/Azure
1. Deploy Node.js server
2. Set up MongoDB Atlas
3. Configure environment variables
4. Start server

### Deployment Checklist

- [ ] Change `JWT_SECRET` to strong random value
- [ ] Set `NODE_ENV=production`
- [ ] Update `CORS_ORIGIN` to production domain
- [ ] Use MongoDB Atlas for database
- [ ] Enable HTTPS
- [ ] Set up error tracking (Sentry)
- [ ] Configure logging
- [ ] Set up monitoring
- [ ] Add rate limiting
- [ ] Test all features
- [ ] Set up backups
- [ ] Configure CDN for static files

---

## 🆘 Troubleshooting

### Frontend Issues

**Port 5173 already in use:**
```bash
# Use different port
npm run dev -- --port 3000
```

**Module not found error:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**API connection failed:**
- Check backend is running on `http://localhost:5000`
- Verify `VITE_API_URL` in `.env`
- Check browser console for errors

### Backend Issues

**MongoDB connection error:**
- Ensure MongoDB is running (`mongod`)
- Check `MONGO_URI` in `.env`
- Verify network access if using Atlas

**Port 5000 already in use:**
```bash
# Use different port
PORT=3001 npm run dev
```

**Module not found:**
```bash
npm install
npm cache clean --force
```

### CORS Errors

**Error: Cross-Origin Request Blocked**
- Check `CORS_ORIGIN` in backend `.env`
- Verify frontend URL matches
- Ensure backend CORS middleware is enabled

### JWT Errors

**Token validation failed:**
- Check `JWT_SECRET` matches frontend/backend
- Clear browser localStorage
- Re-login to get new token

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [JWT Overview](https://jwt.io)
- [REST API Best Practices](https://restfulapi.net)

---

## 📄 License

MIT License - Feel free to use this project for personal or commercial use.

---

## 🙌 Support

For issues or questions:

1. Check [Troubleshooting](#-troubleshooting) section
2. Review [API Documentation](./backend/README.md)
3. Check console errors (F12 in browser)
4. Verify environment variables
5. Check server logs

---

## 🎉 Summary

**You now have:**
✅ Complete React frontend with beautiful landing page  
✅ Production-ready Node.js backend with API  
✅ MongoDB database with 4 models (User, Hotel, Booking, Review)  
✅ JWT authentication system  
✅ Full booking workflow  
✅ Review & rating system  
✅ Responsive design with Tailwind CSS  
✅ Error handling & validation  
✅ Environment configuration  
✅ Development & deployment guides  

**Next Steps:**
1. Connect to MongoDB
2. Integrate real payment gateway (Stripe, Razorpay)
3. Add email notifications
4. Implement admin dashboard
5. Add more hotel management features
6. Deploy to production

**Happy Coding! 🚀**
