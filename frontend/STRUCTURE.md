# 🏨 Frontend Project Structure - Complete Setup

## ✅ What's Been Created

### 📁 Directory Structure
```
frontend/
├── src/
│   ├── assets/                    # Images, icons (placeholder)
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx        # Styled button component (primary, secondary, danger, outline)
│   │   │   ├── Input.jsx         # Form input with error handling
│   │   │   ├── Modal.jsx         # Reusable modal dialog
│   │   │   ├── Loader.jsx        # Animated loading spinner
│   │   │   ├── Toast.jsx         # Toast notification (success, error, info, warning)
│   │   │   └── index.js          # Barrel export
│   │   │
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx       # Collapsible sidebar with menu items
│   │   │   ├── Navbar.jsx        # Top navigation with search & profile
│   │   │   ├── Footer.jsx        # Footer with links & info
│   │   │   └── index.js          # Barrel export
│   │   │
│   │   ├── hotel/
│   │   │   ├── HotelCard.jsx     # Individual hotel card (price, rating, amenities)
│   │   │   ├── HotelGrid.jsx     # Grid layout for hotels
│   │   │   ├── HotelGallery.jsx  # Image carousel with thumbnails
│   │   │   ├── Amenities.jsx     # Amenities display with icons
│   │   │   ├── ReviewCard.jsx    # Single review display
│   │   │   └── index.js          # Barrel export
│   │   │
│   │   ├── booking/
│   │   │   ├── BookingForm.jsx   # Check-in/out date & guest selection
│   │   │   ├── BookingCard.jsx   # Booking summary card with status
│   │   │   ├── DatePicker.jsx    # Calendar date picker
│   │   │   └── index.js          # Barrel export
│   │   │
│   │   └── filters/
│   │       ├── FilterSidebar.jsx # Main filter container
│   │       ├── PriceFilter.jsx   # Price range slider
│   │       ├── RatingFilter.jsx  # Rating selector
│   │       └── index.js          # Barrel export
│   │
│   ├── layouts/
│   │   ├── DashboardLayout.jsx   # Main app layout (sidebar + navbar)
│   │   └── AuthLayout.jsx        # Auth pages layout (centered card)
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx         # Home page with stats & recent bookings
│   │   ├── ExploreHotels.jsx     # Hotel listing with filters & sorting
│   │   ├── HotelDetails.jsx      # Full hotel details page
│   │   ├── BookingPage.jsx       # Booking confirmation with price breakdown
│   │   ├── MyBookings.jsx        # User's booking history
│   │   ├── Wishlist.jsx          # Saved hotels page
│   │   ├── Settings.jsx          # User profile & settings
│   │   └── auth/
│   │       ├── Login.jsx         # Login form page
│   │       └── Signup.jsx        # Registration form page
│   │
│   ├── context/
│   │   ├── AuthContext.jsx       # Auth state (user, token, login/logout)
│   │   ├── BookingContext.jsx    # Bookings state management
│   │   ├── WishlistContext.jsx   # Wishlist state management
│   │   └── index.js              # Barrel export all providers
│   │
│   ├── services/
│   │   ├── api.js                # Axios instance with interceptors
│   │   ├── authService.js        # Auth API calls (login, signup, profile)
│   │   ├── hotelService.js       # Hotel API calls (search, filter, details)
│   │   ├── bookingService.js     # Booking API calls (create, cancel, pay)
│   │   └── index.js              # Barrel export
│   │
│   ├── hooks/
│   │   ├── useAuth.js            # Access auth context
│   │   ├── useFetch.js           # Generic data fetching hook
│   │   ├── useDebounce.js        # Debounce hook for search
│   │   └── index.js              # Barrel export
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx         # Main route configuration
│   │   └── ProtectedRoute.jsx    # Auth protection wrapper
│   │
│   ├── utils/
│   │   ├── helpers.js            # Utility functions (date formatting, calculations)
│   │   ├── constants.js          # Constants (API endpoints, messages, options)
│   │   └── index.js              # Barrel export
│   │
│   ├── App.jsx                   # Main app component with providers
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Tailwind CSS + custom styles
│
├── public/                       # Static assets
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── vite.config.js                # Vite configuration
├── package.json                  # Dependencies & scripts
├── .env.example                  # Environment variables template
├── FRONTEND_README.md            # Comprehensive documentation
└── STRUCTURE.md                  # This file
```

---

## 🎯 Core Features Implemented

### 🔐 Authentication System
- **AuthContext** - Global user state
- **Login/Signup Pages** - Form validation & submission
- **Protected Routes** - Redirect unauthenticated users
- **JWT Token** - Stored in localStorage
- **Auto-logout** - On 401 responses

**Files:**
- `src/context/AuthContext.jsx`
- `src/pages/auth/Login.jsx`
- `src/pages/auth/Signup.jsx`
- `src/routes/ProtectedRoute.jsx`
- `src/services/authService.js`

### 🏨 Hotel System
- **Search & Filter** - By price, rating, location, amenities
- **Hotel Grid** - Responsive card layout
- **Hotel Details** - Full view with gallery, reviews, amenities
- **Booking Widget** - Sticky date/guest selector

**Files:**
- `src/pages/ExploreHotels.jsx`
- `src/pages/HotelDetails.jsx`
- `src/components/hotel/*`
- `src/components/filters/*`
- `src/services/hotelService.js`

### 📅 Booking System
- **Booking Form** - Date & guest selection
- **Booking Confirmation** - Price breakdown
- **Booking Management** - View, update, cancel
- **Booking History** - Past & upcoming bookings

**Files:**
- `src/pages/BookingPage.jsx`
- `src/pages/MyBookings.jsx`
- `src/components/booking/*`
- `src/context/BookingContext.jsx`
- `src/services/bookingService.js`

### ❤️ Wishlist System
- **Add/Remove Hotels** - From wishlist
- **Wishlist Page** - View saved hotels
- **Wishlist Context** - Global state

**Files:**
- `src/pages/Wishlist.jsx`
- `src/context/WishlistContext.jsx`
- `src/components/hotel/HotelCard.jsx`

### 🎨 UI Components (Reusable)
- **Button** - Multiple variants & sizes
- **Input** - With validation & error messages
- **Modal** - Customizable dialogs
- **Loader** - Animated spinner
- **Toast** - Notification system
- **Cards** - Hotel cards, booking cards, stats cards

**Files:**
- `src/components/common/*`

### 📐 Layouts
- **DashboardLayout** - Sidebar + navbar + main content + footer
- **AuthLayout** - Centered card layout for login/signup

**Files:**
- `src/layouts/DashboardLayout.jsx`
- `src/layouts/AuthLayout.jsx`

### 🧭 Navigation & Routing
- **React Router** - Client-side routing
- **Protected Routes** - Auth check
- **Sidebar Menu** - Navigation items
- **Navbar Links** - Quick access

**Files:**
- `src/routes/AppRoutes.jsx`
- `src/routes/ProtectedRoute.jsx`

### 🌐 API Integration
- **Axios Client** - Configured with interceptors
- **Service Layer** - Clean API calls
- **Error Handling** - 401 redirect, error messages
- **Token Management** - Auto-attach JWT

**Files:**
- `src/services/api.js`
- `src/services/authService.js`
- `src/services/hotelService.js`
- `src/services/bookingService.js`

### 🎣 Custom Hooks
- **useAuth()** - Access authentication
- **useFetch()** - Generic data fetching
- **useDebounce()** - Search debouncing

**Files:**
- `src/hooks/useAuth.js`
- `src/hooks/useFetch.js`
- `src/hooks/useDebounce.js`

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **UI Framework** | React 19.2 |
| **Bundler** | Vite 8.0 |
| **Routing** | React Router 6.20 |
| **Styling** | Tailwind CSS 3.3 |
| **HTTP Client** | Axios 1.6 |
| **CSS Processing** | PostCSS + Autoprefixer |
| **State Management** | React Context API |

---

## 📄 Page Routes

| Page | Path | Auth Required | Description |
|------|------|---------------|-------------|
| Login | `/login` | ❌ No | User login |
| Signup | `/signup` | ❌ No | User registration |
| Dashboard | `/dashboard` | ✅ Yes | Home with stats |
| Explore | `/explore` | ✅ Yes | Hotel listing & search |
| Hotel Details | `/hotel/:id` | ✅ Yes | Full hotel view |
| Booking | `/booking` | ✅ Yes | Booking confirmation |
| My Bookings | `/bookings` | ✅ Yes | User's bookings |
| Wishlist | `/wishlist` | ✅ Yes | Saved hotels |
| Settings | `/settings` | ✅ Yes | Profile & settings |

---

## 🚀 Quick Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Install dependencies
npm install
```

---

## 💡 Usage Examples

### Using Context
```javascript
import { useAuth } from '@/hooks/useAuth';

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) return <p>Please login</p>;
  
  return <div>Welcome, {user.name}!</div>;
}
```

### Using Service
```javascript
import { hotelService } from '@/services';

async function SearchHotels() {
  try {
    const hotels = await hotelService.searchHotels({
      location: 'New York',
      checkIn: '2024-05-15',
      checkOut: '2024-05-18',
    });
    console.log(hotels);
  } catch (error) {
    console.error('Search failed:', error);
  }
}
```

### Using Hook
```javascript
import { useFetch } from '@/hooks/useFetch';
import { hotelService } from '@/services';

function HotelsList() {
  const { data: hotels, loading, error } = useFetch(
    () => hotelService.getAllHotels(),
    []
  );
  
  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  
  return <HotelGrid hotels={hotels} />;
}
```

---

## 🔧 Configuration Files

### `.env.example`
```env
VITE_API_URL=http://localhost:5000/api
```

### `tailwind.config.js`
- Configured for all src files
- Custom colors & animations
- Extended theme options

### `postcss.config.js`
- Tailwind CSS plugin
- Autoprefixer for browser compatibility

### `vite.config.js`
- React plugin enabled
- HMR configured

---

## 📝 Next Steps

### To Connect Backend
1. Update `VITE_API_URL` in `.env`
2. Modify API endpoints in `src/utils/constants.js`
3. Implement real API calls in service files
4. Handle real authentication flow

### To Add Features
1. **New Page?** → Create in `src/pages/`, add route
2. **New Component?** → Create in `src/components/`
3. **New Hook?** → Create in `src/hooks/`
4. **New API?** → Create service in `src/services/`
5. **New State?** → Add context in `src/context/`

### To Customize
- **Colors?** → Update `tailwind.config.js`
- **Fonts?** → Update Tailwind theme
- **Animations?** → Add in `index.css`
- **API Base?** → Update `.env`

---

## 📚 File Import Patterns

```javascript
// Components
import Button from '@/components/common/Button';
// OR
import { Button, Input } from '@/components/common';

// Hooks
import { useAuth, useFetch } from '@/hooks';

// Services
import { hotelService, authService } from '@/services';

// Context
import { AuthProvider, BookingProvider } from '@/context';

// Utils
import { formatDate, BOOKING_STATUS } from '@/utils';
```

---

## ✨ Features to Add Next

- [ ] Dark mode toggle
- [ ] Real payment gateway integration
- [ ] Email verification
- [ ] Password reset flow
- [ ] Advanced filters (map, amenities multi-select)
- [ ] Reviews & ratings submission
- [ ] User avatar upload
- [ ] Booking notifications
- [ ] Export bookings (PDF)
- [ ] Admin dashboard

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Axios Docs](https://axios-http.com)

---

## 🎉 You're All Set!

The frontend is now fully structured and ready for development. All components, hooks, services, and layouts are in place. Connect it to your backend API and start building! 🚀

**Happy coding!**
