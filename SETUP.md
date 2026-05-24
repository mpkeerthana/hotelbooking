# ⚡ Quick Setup Guide

## 🎯 Get Started in 5 Minutes

### Step 1: Install Dependencies

```bash
# Terminal 1: Frontend
cd frontend
npm install

# Terminal 2: Backend
cd backend
npm install
```

### Step 2: Configure Backend

**Create `backend/.env`:**
```env
MONGO_URI=mongodb://localhost:27017/hotelbooking
JWT_SECRET=dev_secret_key_change_in_production
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5174
```

### Step 3: Start MongoDB

**Option 1: Local MongoDB**
```bash
mongod
```

**Option 2: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/atlas
2. Create free account & cluster
3. Get connection string
4. Update `MONGO_URI` in `.env`

### Step 4: Start Services

**Terminal 1: Backend**
```bash
cd backend
npm run dev
# ✅ Server runs on http://localhost:5000
```

**Terminal 2: Frontend**
```bash
cd frontend
npm run dev
# ✅ App opens on http://localhost:5174
```

### Step 5: Test Landing Page

Open **http://localhost:5174** in browser and explore:
- 🎨 Beautiful hero section
- 🔍 Smart search bar
- 🏨 Popular destinations
- ⭐ Featured hotels
- 💎 Trust section
- 📝 Reviews
- ❤️ CTA sections
- 📬 Newsletter
- 🧾 Footer

---

## 🧪 Test API Connection

```bash
# Test backend health
curl http://localhost:5000/api/health

# Response should be:
# {"status":"Server is running"}
```

---

## 🎮 Demo Actions

### 1. Create Account
- Click **Sign Up** on landing page
- Fill in details and register
- You'll be logged in automatically

### 2. Search Hotels
- Click **Explore Hotels** button
- Search by location
- Select dates & guests
- View results

### 3. Book Hotel
- Click on hotel card
- View details & reviews
- Select check-in/out dates
- Complete booking

### 4. View Bookings
- Go to **My Bookings**
- See booking history
- Cancel if needed

---

## 📁 Project Structure

```
hotelbooking/
├── frontend/           # React app
│   ├── src/
│   │   ├── pages/Landing.jsx  ← NEW: Beautiful landing page
│   │   ├── components/
│   │   ├── context/
│   │   └── ...
│   └── package.json
├── backend/            # Node.js API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env           ← Create this!
│   └── package.json
└── README.md           # Full documentation
```

---

## 🔑 Key Credentials (Demo)

After signup, use any email/password combination:
- Email: demo@example.com
- Password: password123

(These are stored locally in development)

---

## 🚀 What's Included

✅ **Frontend**
- React 19.2 with Vite
- Tailwind CSS styling
- React Router navigation
- Context API state management
- JWT authentication
- Axios for API calls
- Beautiful animations
- Responsive design

✅ **Backend**
- Express.js server
- MongoDB database
- JWT authentication
- 4 data models (User, Hotel, Booking, Review)
- CRUD operations
- Error handling
- CORS configuration

✅ **Features**
- User authentication
- Hotel search & filtering
- Real-time availability
- Booking management
- Reviews & ratings
- Wishlist
- Price calculations
- Payment simulation

---

## 🐛 Common Issues & Fixes

### Frontend won't load
```bash
# Clear cache and restart
cd frontend
rm -rf node_modules .vite
npm install
npm run dev
```

### Backend connection error
```bash
# Check MongoDB is running
mongod

# Or update .env with MongoDB Atlas URL
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/hotelbooking
```

### Port already in use
```bash
# Kill the process using port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or use different port
PORT=3001 npm run dev
```

### CORS error
- Check backend is running on correct port
- Verify `CORS_ORIGIN` in `.env`
- Clear browser cache

---

## 📚 Documentation

- **Full Setup:** [README.md](./README.md)
- **Backend API:** [backend/README.md](./backend/README.md)
- **Frontend:** See [frontend/README.md](./frontend/README.md)

---

## ✅ Checklist

- [ ] Node.js 14+ installed
- [ ] MongoDB installed/account created
- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file created in backend
- [ ] MongoDB running
- [ ] Backend running (`npm run dev` in backend)
- [ ] Frontend running (`npm run dev` in frontend)
- [ ] Browser opened to http://localhost:5174
- [ ] Landing page displays correctly
- [ ] Can sign up & login
- [ ] Can search hotels
- [ ] API responding to requests

---

## 🚀 Next Steps

1. **Customize** - Update brand name, colors, content
2. **Add Features** - Payment gateway, email, analytics
3. **Deploy** - Push to production
4. **Monitor** - Set up error tracking & logging
5. **Scale** - Add caching, CDN, more servers

---

## 🆘 Need Help?

1. Check browser console (F12) for errors
2. Check backend console for API errors
3. Verify MongoDB connection
4. Check environment variables
5. Read full documentation in README.md

---

**Ready? Start with Step 1 above! 🎉**
