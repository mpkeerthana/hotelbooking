# 🏨 StayHub - Hotel Booking Platform
## Complete Setup & Navigation Guide

---

## 📂 Quick File Navigation

### 📖 Documentation (Read These First!)

1. **[SETUP.md](./SETUP.md)** - ⚡ **START HERE**
   - Quick 5-minute setup
   - Installation steps
   - Demo actions
   - Troubleshooting

2. **[README.md](./README.md)** - 📚 Full Documentation
   - Project overview
   - Complete tech stack
   - All features explained
   - Deployment guide

3. **[LANDING_PAGE_SUMMARY.md](./LANDING_PAGE_SUMMARY.md)** - 🎨 Landing Page Details
   - Visual structure
   - Features breakdown
   - Customization guide
   - Performance stats

4. **[backend/README.md](./backend/README.md)** - 🔌 API Documentation
   - All API endpoints
   - Request/response examples
   - Authentication details
   - Database schemas

---

## 🚀 Quick Start (30 seconds)

```bash
# 1. Open Terminal 1 (Backend)
cd hotelbooking/backend
npm run dev

# 2. Open Terminal 2 (Frontend)
cd hotelbooking/frontend
npm run dev

# 3. Open Browser
# http://localhost:5174
```

**Done!** 🎉 You now have:
- 🎨 Beautiful landing page
- 🏨 Hotel booking platform
- 🔧 Full backend API
- 📱 Mobile responsive design

---

## 📁 Project Structure

```
hotelbooking/
│
├── 📄 SETUP.md                      ← START HERE (Quick setup)
├── 📄 README.md                     ← Full documentation
├── 📄 LANDING_PAGE_SUMMARY.md       ← Landing page details
├── 📄 INDEX.md                      ← This file
│
├── 🎨 frontend/                     ← React App (Port 5174)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Landing.jsx          ← NEW! Beautiful landing page ⭐
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
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── TopNav.jsx       ← NEW! Navigation bar ⭐
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   ├── common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Toast.jsx
│   │   │   │   └── Loader.jsx
│   │   │   ├── hotel/
│   │   │   │   ├── HotelCard.jsx
│   │   │   │   ├── HotelGrid.jsx
│   │   │   │   ├── HotelGallery.jsx
│   │   │   │   ├── Amenities.jsx
│   │   │   │   └── ReviewCard.jsx
│   │   │   ├── booking/
│   │   │   │   ├── BookingForm.jsx
│   │   │   │   ├── BookingCard.jsx
│   │   │   │   └── DatePicker.jsx
│   │   │   └── filters/
│   │   │       ├── FilterSidebar.jsx
│   │   │       ├── PriceFilter.jsx
│   │   │       └── RatingFilter.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── BookingContext.jsx
│   │   │   └── WishlistContext.jsx
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useFetch.js
│   │   │   └── useDebounce.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── hotelService.js
│   │   │   └── bookingService.js
│   │   ├── utils/
│   │   │   ├── constants.js
│   │   │   └── helpers.js
│   │   ├── routes/
│   │   │   ├── AppRoutes.jsx         ← Updated with Landing route ⭐
│   │   │   └── ProtectedRoute.jsx
│   │   ├── layouts/
│   │   │   ├── AuthLayout.jsx
│   │   │   └── DashboardLayout.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css                  ← Updated with animations ⭐
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js             ← Updated with animations ⭐
│   ├── postcss.config.js
│   └── README.md
│
└── 🔧 backend/                     ← Node.js API (Port 5000)
    ├── config/
    │   └── db.js                   ← MongoDB connection
    ├── controllers/
    │   ├── authController.js       ← Authentication logic
    │   ├── hotelController.js      ← Hotel management
    │   ├── bookingController.js    ← Booking management
    │   └── reviewController.js     ← Reviews & ratings
    ├── models/
    │   ├── User.js                 ← User schema
    │   ├── Hotel.js                ← Hotel schema
    │   ├── Booking.js              ← Booking schema
    │   └── Review.js               ← Review schema
    ├── routes/
    │   ├── authRoutes.js           ← Auth endpoints
    │   ├── hotelRoutes.js          ← Hotel endpoints
    │   ├── bookingRoutes.js        ← Booking endpoints
    │   └── reviewRoutes.js         ← Review endpoints
    ├── middleware/
    │   ├── authMiddleware.js       ← JWT verification
    │   └── errorMiddleware.js      ← Error handling
    ├── utils/
    │   └── generateToken.js        ← JWT token generation
    ├── app.js                      ← Express setup
    ├── server.js                   ← Server entry point
    ├── package.json
    ├── .env                        ← Configuration
    ├── .gitignore
    └── README.md                   ← API documentation
```

---

## 🌐 Access Points

### Development

| Service | URL | Port |
|---------|-----|------|
| Frontend | http://localhost:5174 | 5174 |
| Backend API | http://localhost:5000/api | 5000 |
| API Health | http://localhost:5000/api/health | 5000 |
| MongoDB | mongodb://localhost:27017 | 27017 |

### Features by Page

| Page | Route | Type | Description |
|------|-------|------|-------------|
| 🎨 Landing | `/` | Public | Hero, search, features, reviews |
| 📱 Dashboard | `/dashboard` | Protected | User overview & stats |
| 🔍 Explore | `/explore` | Protected | Browse & search hotels |
| 🏨 Details | `/hotel/:id` | Protected | Hotel info & booking |
| 📅 Booking | `/booking` | Protected | Checkout & confirmation |
| 📋 Bookings | `/bookings` | Protected | Manage bookings |
| ❤️ Wishlist | `/wishlist` | Protected | Saved hotels |
| ⚙️ Settings | `/settings` | Protected | User profile |
| 🔐 Login | `/login` | Public | Authentication |
| 📝 Signup | `/signup` | Public | User registration |

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Authentication
```
POST   /auth/signup              ← Register user
POST   /auth/login               ← Login user
GET    /auth/me                  ← Get current user
PUT    /auth/profile             ← Update profile
POST   /auth/change-password     ← Change password
```

### Hotels
```
GET    /hotels                   ← List all hotels
GET    /hotels/:id               ← Get hotel details
POST   /hotels/search            ← Search hotels
POST   /hotels/:id/availability  ← Check availability
POST   /hotels                   ← Create hotel (admin)
PUT    /hotels/:id               ← Update hotel (admin)
DELETE /hotels/:id               ← Delete hotel (admin)
```

### Bookings
```
POST   /bookings                 ← Create booking
GET    /bookings                 ← Get user bookings
GET    /bookings/:id             ← Get booking details
POST   /bookings/:id/cancel      ← Cancel booking
POST   /bookings/:id/payment     ← Process payment
PUT    /bookings/:id             ← Update booking (admin)
```

### Reviews
```
GET    /reviews/hotels/:id/reviews           ← Get hotel reviews
POST   /reviews/hotels/:id/reviews           ← Create review
PUT    /reviews/:id                          ← Update review
DELETE /reviews/:id                          ← Delete review
POST   /reviews/:id/helpful                  ← Mark helpful
```

See [backend/README.md](./backend/README.md) for complete API documentation with examples.

---

## 🎨 Frontend Pages

### 1. Landing Page 🎉 (NEW!)
- **File**: `frontend/src/pages/Landing.jsx`
- **Route**: `/`
- **Features**:
  - Hero section with search
  - Popular destinations
  - Featured hotels
  - Trust signals
  - Reviews & testimonials
  - How it works section
  - Special offers
  - Newsletter signup
  - Professional footer

### 2. Dashboard
- **File**: `frontend/src/pages/Dashboard.jsx`
- **Route**: `/dashboard` (Protected)
- **Features**: User stats, quick links

### 3. Explore Hotels
- **File**: `frontend/src/pages/ExploreHotels.jsx`
- **Route**: `/explore` (Protected)
- **Features**: Search, filter, grid view

### 4. Hotel Details
- **File**: `frontend/src/pages/HotelDetails.jsx`
- **Route**: `/hotel/:id` (Protected)
- **Features**: Images, info, reviews, booking button

### 5. Booking
- **File**: `frontend/src/pages/BookingPage.jsx`
- **Route**: `/booking` (Protected)
- **Features**: Checkout, price breakdown, payment

### 6. My Bookings
- **File**: `frontend/src/pages/MyBookings.jsx`
- **Route**: `/bookings` (Protected)
- **Features**: Booking history, cancellation

### 7. Wishlist
- **File**: `frontend/src/pages/Wishlist.jsx`
- **Route**: `/wishlist` (Protected)
- **Features**: Saved hotels, remove from wishlist

### 8. Settings
- **File**: `frontend/src/pages/Settings.jsx`
- **Route**: `/settings` (Protected)
- **Features**: Profile, preferences, logout

### 9. Login
- **File**: `frontend/src/pages/auth/Login.jsx`
- **Route**: `/login`
- **Features**: Email/password login

### 10. Signup
- **File**: `frontend/src/pages/auth/Signup.jsx`
- **Route**: `/signup`
- **Features**: User registration

---

## 🔧 Technology Stack

### Frontend
- React 19.2
- Vite 8.0 (Build tool)
- Tailwind CSS 3.3 (Styling)
- React Router 6.20 (Routing)
- Lucide React (Icons)
- Axios 1.6 (HTTP)
- Context API (State)

### Backend
- Node.js (Runtime)
- Express 4.18 (Framework)
- MongoDB 7.6 (Database)
- Mongoose (ODM)
- JWT 9.1 (Auth)
- bcryptjs 2.4 (Password)
- CORS 2.8 (Cross-origin)
- Nodemon 3.0 (Dev reload)

---

## ✨ Key Features

✅ **Authentication**
- User signup & login
- JWT token management
- Password hashing
- Protected routes

✅ **Hotel Management**
- Browse all hotels
- Advanced search & filters
- Hotel details & images
- Availability checking

✅ **Booking System**
- Easy booking flow
- Date selection
- Guest count
- Price calculation
- Booking management
- Cancellation with refunds

✅ **Reviews & Ratings**
- Leave reviews
- 5-star ratings
- Verified buyer badge
- Helpful votes
- Average rating calculation

✅ **Additional**
- Wishlist/favorites
- User profile
- Settings page
- Responsive design
- Beautiful animations
- Error handling
- Toast notifications

---

## 🚀 Getting Started

### Option 1: Quick Start (Recommended)
1. Read [SETUP.md](./SETUP.md)
2. Run the 4 quick commands
3. Open browser to http://localhost:5174

### Option 2: Full Setup
1. Read [README.md](./README.md)
2. Follow complete setup
3. Configure MongoDB
4. Customize settings

### Option 3: Custom Install
1. Read [backend/README.md](./backend/README.md)
2. Read [frontend/README.md](./frontend/README.md)
3. Set up components individually

---

## 🎯 Next Steps

1. **Test Landing Page**
   ```bash
   npm run dev  # in frontend folder
   # Visit http://localhost:5174
   ```

2. **Customize Content**
   - Edit Landing.jsx with your hotels
   - Update colors in tailwind.config.js
   - Modify navigation links

3. **Set Up Backend**
   - Configure MongoDB
   - Set JWT_SECRET
   - Start backend server

4. **Test Booking Flow**
   - Create account
   - Search hotels
   - Complete booking

5. **Deploy**
   - Push to GitHub
   - Deploy frontend (Vercel/Netlify)
   - Deploy backend (Railway/Heroku)

---

## 📞 Support

### For Issues
1. Check [SETUP.md](./SETUP.md) troubleshooting
2. Check console errors (F12)
3. Verify MongoDB connection
4. Check .env configuration

### For Questions
1. See [README.md](./README.md)
2. See [backend/README.md](./backend/README.md)
3. Check code comments
4. Review example requests

---

## 📚 Documentation Files

```
hotelbooking/
├── INDEX.md                         ← You are here
├── SETUP.md                         ← Quick setup guide
├── README.md                        ← Full documentation
├── LANDING_PAGE_SUMMARY.md          ← Landing page details
├── backend/README.md                ← API documentation
└── frontend/README.md               ← Frontend guide
```

---

## ✅ Checklist

- [ ] Read SETUP.md
- [ ] Install dependencies
- [ ] Configure MongoDB
- [ ] Set .env variables
- [ ] Start backend
- [ ] Start frontend
- [ ] Visit landing page
- [ ] Test sign up
- [ ] Test hotel search
- [ ] Test booking flow
- [ ] Explore all pages
- [ ] Check responsive design
- [ ] Review API documentation

---

## 🎉 You're All Set!

Your hotel booking platform is:
- ✅ Frontend ready
- ✅ Backend ready
- ✅ Database configured
- ✅ Authentication working
- ✅ Landing page complete
- ✅ Fully documented

**Next: Start with [SETUP.md](./SETUP.md)** 👈

---

**Happy Coding! 🚀**

For detailed information, see the individual documentation files:
- Quick Start → [SETUP.md](./SETUP.md)
- Full Guide → [README.md](./README.md)
- Landing Details → [LANDING_PAGE_SUMMARY.md](./LANDING_PAGE_SUMMARY.md)
- API Docs → [backend/README.md](./backend/README.md)
