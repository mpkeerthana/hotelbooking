# 🚀 Quick Start Guide

## What Was Created ✅

A fully structured **React + Tailwind CSS** hotel booking platform with:

- ✨ **20+ Reusable Components** (buttons, inputs, cards, modals, etc.)
- 📄 **8 Main Pages** (Dashboard, Explore, Details, Booking, etc.)
- 🔐 **Authentication System** (Login/Signup with context)
- 📅 **Booking Management** (Create, view, cancel)
- ❤️ **Wishlist System** (Save hotels)
- 🎨 **Tailwind CSS** (Responsive, modern design)
- 🧠 **Custom Hooks** (useAuth, useFetch, useDebounce)
- 🔌 **API Services** (Axios with interceptors)
- 🛣️ **Protected Routes** (Authentication required)

---

## 🎯 Getting Started (5 minutes)

### 1️⃣ Install Dependencies
```bash
cd frontend
npm install
```

### 2️⃣ Start Dev Server
```bash
npm run dev
```
Opens at: `http://localhost:5173`

### 3️⃣ Test the App
- Go to **Login** page
- Create an account (mock auth works locally)
- Explore hotels
- Add to wishlist
- Make a booking

---

## 📁 Key Folders

```
src/
├── components/      # UI components
├── pages/          # Route pages
├── context/        # State management
├── services/       # API calls
├── hooks/          # Custom hooks
└── utils/          # Helpers & constants
```

---

## 🔗 Connect Backend

1. Create `.env` file:
```env
<<<<<<< HEAD
VITE_API_URL=https://hotelbooking-backend-663i.onrender.com/api
=======
VITE_API_URL=VITE_API_URL=https://hotelbooking-backend-663i.onrender.com/api
>>>>>>> 856324a9657af5c8b220e31c9ab8dfb32e8f6962
```

2. Update API endpoints in `src/utils/constants.js`

3. Modify service files in `src/services/` to use real APIs

---

## 🎨 Customize

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

### Add New Page
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/routes/AppRoutes.jsx`
3. Add menu item in `src/components/layout/Sidebar.jsx`

### Add Component
1. Create in appropriate `src/components/` folder
2. Export from folder's `index.js`
3. Use in pages

---

## 📚 Important Files

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main component with providers |
| `src/routes/AppRoutes.jsx` | All routes defined |
| `src/context/AuthContext.jsx` | Auth state |
| `src/services/api.js` | Axios setup |
| `src/hooks/useAuth.js` | Auth hook |
| `tailwind.config.js` | Styling config |

---

## 🔑 Key Patterns

### Access Auth
```javascript
import { useAuth } from '@/hooks';

const { user, isAuthenticated, logout } = useAuth();
```

### Fetch Data
```javascript
import { useFetch } from '@/hooks';

const { data, loading, error } = useFetch(
  () => hotelService.getAllHotels()
);
```

### Make API Call
```javascript
import { authService } from '@/services';

await authService.login(email, password);
```

---

## 🛠️ Available Scripts

```bash
npm run dev       # Start development
npm run build     # Build for production
npm run preview   # Preview production
npm run lint      # Check code
```

---

## ✨ Features Ready to Use

- ✅ Hero/Landing
- ✅ Hotel Search & Filter
- ✅ Hotel Details
- ✅ Booking System
- ✅ Payment Page (UI)
- ✅ My Bookings
- ✅ Wishlist
- ✅ User Settings
- ✅ Profile Management
- ✅ Responsive Design

---

## 📋 Component List

### Common Components
- Button, Input, Modal, Loader, Toast

### Layout Components
- Sidebar, Navbar, Footer

### Hotel Components
- HotelCard, HotelGrid, HotelGallery, Amenities, ReviewCard

### Booking Components
- BookingForm, BookingCard, DatePicker

### Filter Components
- FilterSidebar, PriceFilter, RatingFilter

---

## 🎓 Project Structure Tips

- **Components** = Reusable UI pieces
- **Pages** = Full screen views (routes)
- **Context** = Global state
- **Services** = API communication
- **Hooks** = Reusable logic
- **Utils** = Helper functions

---

## 🚨 Common Tweaks

### Add a new menu item
Edit `src/components/layout/Sidebar.jsx` → `menuItems` array

### Change API URL
Edit `.env` → `VITE_API_URL`

### Update colors
Edit `tailwind.config.js` → `theme.extend.colors`

### Add authentication
Already set up! Login/Signup pages ready

---

## 📝 Notes

- Mock data is included for demo
- Replace with real API calls
- JWT token stored in localStorage
- Protected routes check authentication
- All components use Tailwind CSS

---

## 🎉 You're Ready!

Everything is set up and working. Start coding! 

**Next Steps:**
1. ✅ Dependencies installed
2. 🚀 Run `npm run dev`
3. 🧪 Test the app
4. 🔌 Connect your backend API
5. 🎨 Customize as needed

---

**Happy Building! 🏨🚀**
