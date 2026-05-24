# 🏨 TravelHub Frontend

A modern hotel booking platform built with **React**, **Vite**, and **Tailwind CSS**.

## 📋 Features

- ✅ **Authentication** - Signup/Login with JWT tokens
- ✅ **Hotel Discovery** - Search, filter, and explore hotels
- ✅ **Booking System** - Complete booking flow with price breakdown
- ✅ **Wishlist** - Save favorite hotels
- ✅ **Booking Management** - View, manage, and cancel bookings
- ✅ **User Settings** - Profile management and preferences
- ✅ **Responsive Design** - Mobile-friendly UI with Tailwind CSS
- ✅ **Modern UI** - Clean, premium design with smooth animations

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Then update the API URL if needed:
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Start Development Server
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── assets/              # Images, icons
├── components/          # Reusable UI components
│   ├── common/         # Button, Input, Modal, etc.
│   ├── layout/         # Sidebar, Navbar, Footer
│   ├── hotel/          # HotelCard, HotelGrid, etc.
│   ├── booking/        # BookingForm, BookingCard, etc.
│   └── filters/        # FilterSidebar, PriceFilter, etc.
├── layouts/            # DashboardLayout, AuthLayout
├── pages/              # Route pages
│   ├── Dashboard.jsx
│   ├── ExploreHotels.jsx
│   ├── HotelDetails.jsx
│   ├── BookingPage.jsx
│   ├── MyBookings.jsx
│   ├── Wishlist.jsx
│   ├── Settings.jsx
│   └── auth/
│       ├── Login.jsx
│       └── Signup.jsx
├── context/            # Global state (Auth, Booking, Wishlist)
├── services/           # API calls (axios)
├── hooks/              # Custom hooks (useAuth, useFetch, useDebounce)
├── routes/             # Route configuration & protection
├── utils/              # Helpers, constants
├── App.jsx
├── main.jsx
└── index.css
```

## 🔑 Key Components

### Pages
- **Dashboard** - Overview with stats and recent bookings
- **ExploreHotels** - Hotel listing with filters and search
- **HotelDetails** - Detailed hotel view with reviews
- **BookingPage** - Booking confirmation and payment
- **MyBookings** - User's booking history
- **Wishlist** - Saved hotels
- **Settings** - Profile and account settings

### Context Providers
- **AuthContext** - User authentication state
- **BookingContext** - Bookings state management
- **WishlistContext** - Wishlist state management

### Services
- **authService** - Login, signup, profile management
- **hotelService** - Hotel search, filtering, details
- **bookingService** - Booking creation, management, payments

### Custom Hooks
- **useAuth()** - Access authentication context
- **useFetch()** - Fetch data with loading/error states
- **useDebounce()** - Debounce values for search

## 🎨 Design Features

- Clean, minimal interface with Tailwind CSS
- Responsive grid layouts
- Smooth hover effects and transitions
- Loading skeletons
- Toast notifications
- Modal dialogs
- Collapsible sidebar
- Premium card designs with shadows

## 🔐 Authentication

The app uses JWT tokens stored in localStorage. Protected routes require authentication.

```javascript
import { useAuth } from './hooks/useAuth';

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return <div>Welcome, {user.name}!</div>;
}
```

## 📡 API Integration

Update API endpoints in `src/utils/constants.js` and configure the base URL in `.env`:

```javascript
// src/services/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'VITE_API_URL=https://hotelbooking-backend-663i.onrender.com/api';
```

## 🛠️ Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 📦 Dependencies

- **react** - UI library
- **react-dom** - React DOM rendering
- **react-router-dom** - Client-side routing
- **axios** - HTTP client
- **tailwindcss** - CSS framework

## 🧩 Extending the Project

### Add a New Page
1. Create file in `src/pages/`
2. Add route in `src/routes/AppRoutes.jsx`
3. Add navigation link in `src/components/layout/Sidebar.jsx`

### Add a New Component
1. Create component in appropriate `src/components/` folder
2. Export from component's index or import directly

### Add a New API Service
1. Create service file in `src/services/`
2. Use `apiClient` for HTTP requests
3. Export functions for API calls

## 🌐 Environment Variables

```env
# Backend API URL
VITE_API_URL=VITE_API_URL=https://hotelbooking-backend-663i.onrender.com/api
# Add more as needed
VITE_STRIPE_KEY=
VITE_APP_NAME=TravelHub
```

## 📝 Notes

- Mock data is included for demo purposes
- Replace with real API calls when backend is ready
- Update hotel images with real URLs
- Implement payment gateway integration when needed

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

MIT License - feel free to use this project as a template!

---

**Happy Coding! 🚀**
