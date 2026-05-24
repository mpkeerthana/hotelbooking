# 🏨 Hotel Booking Backend API

A complete Node.js + Express + MongoDB backend for a hotel booking platform with authentication, hotel management, bookings, and reviews.

---

## 📋 Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [API Endpoints](#api-endpoints)
4. [Authentication](#authentication)
5. [Data Models](#data-models)
6. [Error Handling](#error-handling)
7. [Development](#development)

---

## 🚀 Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud)
- npm or yarn

### Steps

1. **Clone or navigate to backend folder**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file** (copy from `.env` template)
```bash
MONGO_URI=mongodb://localhost:27017/hotelbooking
JWT_SECRET=your_super_secret_key
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

4. **Start MongoDB** (if running locally)
```bash
mongod
```

5. **Run the server**
```bash
npm run dev    # Development with hot-reload
npm start      # Production
```

✅ Server runs at: `http://localhost:5000/api`

---

## ⚙️ Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `MONGO_URI` | - | MongoDB connection string |
| `JWT_SECRET` | - | Secret key for JWT tokens |
| `JWT_EXPIRE` | 7d | JWT expiration time |
| `PORT` | 5000 | Server port |
| `NODE_ENV` | development | Environment |
| `CORS_ORIGIN` | http://localhost:5173 | CORS allowed origin |

---

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)

#### Sign Up
```http
POST /api/auth/signup
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}

Response: 201 Created
{
  "success": true,
  "token": "eyJhbGc...",
  "user": {
    "id": "123...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response: 200 OK
{
  "success": true,
  "token": "eyJhbGc...",
  "user": { ... }
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "user": {
    "id": "123...",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "avatar": "url",
    "role": "user"
  }
}
```

#### Update Profile
```http
PUT /api/auth/profile
Authorization: Bearer {token}
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890",
  "avatar": "avatar_url"
}

Response: 200 OK
{ "success": true, "user": { ... } }
```

#### Change Password
```http
POST /api/auth/change-password
Authorization: Bearer {token}
Content-Type: application/json

{
  "oldPassword": "oldpass123",
  "newPassword": "newpass123",
  "confirmPassword": "newpass123"
}

Response: 200 OK
{ "success": true, "message": "Password changed successfully" }
```

---

### Hotel Routes (`/api/hotels`)

#### Get All Hotels
```http
GET /api/hotels?city=New York&minPrice=100&maxPrice=500&rating=4

Response: 200 OK
{
  "success": true,
  "count": 10,
  "data": [
    {
      "_id": "123...",
      "name": "Luxury Park Hotel",
      "location": "New York, USA",
      "price": 250,
      "rating": 4.8,
      "images": ["url1", "url2"],
      "amenities": ["WiFi", "Pool"],
      ...
    }
  ]
}
```

#### Get Single Hotel
```http
GET /api/hotels/:id

Response: 200 OK
{
  "success": true,
  "data": { ... }
}
```

#### Search Hotels
```http
POST /api/hotels/search
Content-Type: application/json

{
  "location": "New York",
  "checkIn": "2024-05-15",
  "checkOut": "2024-05-18",
  "guests": 2
}

Response: 200 OK
{
  "success": true,
  "count": 5,
  "data": [ ... ]
}
```

#### Create Hotel
```http
POST /api/hotels
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Luxury Hotel",
  "description": "...",
  "location": "New York, USA",
  "city": "New York",
  "price": 250,
  "images": ["url1", "url2"],
  "amenities": ["WiFi", "Pool"],
  "rooms": 50,
  "maxGuests": 4
}

Response: 201 Created
{ "success": true, "data": { ... } }
```

#### Update Hotel
```http
PUT /api/hotels/:id
Authorization: Bearer {token}
Content-Type: application/json

{ "price": 300, "name": "Updated Name" }

Response: 200 OK
{ "success": true, "data": { ... } }
```

#### Delete Hotel
```http
DELETE /api/hotels/:id
Authorization: Bearer {token}

Response: 200 OK
{ "success": true, "message": "Hotel deleted successfully" }
```

#### Check Availability
```http
POST /api/hotels/:id/availability
Content-Type: application/json

{
  "checkIn": "2024-05-15",
  "checkOut": "2024-05-18"
}

Response: 200 OK
{
  "success": true,
  "available": true,
  "bookedDates": [ ... ]
}
```

---

### Booking Routes (`/api/bookings`)

#### Create Booking
```http
POST /api/bookings
Authorization: Bearer {token}
Content-Type: application/json

{
  "hotelId": "123...",
  "checkIn": "2024-05-15",
  "checkOut": "2024-05-18",
  "guests": 2,
  "rooms": 1,
  "pricePerNight": 250,
  "guestName": "John Doe",
  "guestEmail": "john@example.com",
  "guestPhone": "+1234567890"
}

Response: 201 Created
{
  "success": true,
  "data": {
    "_id": "456...",
    "user": "123...",
    "hotel": "789...",
    "checkIn": "2024-05-15",
    "checkOut": "2024-05-18",
    "guests": 2,
    "nights": 3,
    "subtotal": 750,
    "tax": 112.5,
    "serviceFee": 30,
    "totalPrice": 892.5,
    "status": "pending"
  }
}
```

#### Get User Bookings
```http
GET /api/bookings
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "count": 5,
  "data": [ ... ]
}
```

#### Get Single Booking
```http
GET /api/bookings/:id
Authorization: Bearer {token}

Response: 200 OK
{ "success": true, "data": { ... } }
```

#### Cancel Booking
```http
POST /api/bookings/:id/cancel
Authorization: Bearer {token}

Response: 200 OK
{
  "success": true,
  "message": "Booking cancelled successfully",
  "data": { ... }
}
```

#### Process Payment
```http
POST /api/bookings/:id/payment
Authorization: Bearer {token}
Content-Type: application/json

{
  "paymentMethod": "credit_card"
}

Response: 200 OK
{
  "success": true,
  "message": "Payment processed successfully",
  "data": { ... }
}
```

---

### Review Routes (`/api/reviews`)

#### Create Review
```http
POST /api/reviews/hotels/:hotelId/reviews
Authorization: Bearer {token}
Content-Type: application/json

{
  "rating": 5,
  "title": "Excellent Stay",
  "comment": "Had a great time...",
  "cleanliness": 5,
  "service": 5,
  "value": 4,
  "bookingId": "456..."
}

Response: 201 Created
{ "success": true, "data": { ... } }
```

#### Get Hotel Reviews
```http
GET /api/reviews/hotels/:hotelId/reviews?rating=4&sort=helpful

Response: 200 OK
{
  "success": true,
  "count": 10,
  "avgRating": "4.5",
  "data": [ ... ]
}
```

#### Update Review
```http
PUT /api/reviews/:id
Authorization: Bearer {token}
Content-Type: application/json

{ "rating": 4, "comment": "Updated comment" }

Response: 200 OK
{ "success": true, "data": { ... } }
```

#### Delete Review
```http
DELETE /api/reviews/:id
Authorization: Bearer {token}

Response: 200 OK
{ "success": true, "message": "Review deleted successfully" }
```

#### Mark Review Helpful
```http
POST /api/reviews/:id/helpful

Response: 200 OK
{ "success": true, "data": { ... } }
```

---

## 🔐 Authentication

### JWT Token System

1. **User logs in** → Backend generates JWT token
2. **Token sent to frontend** → Frontend stores in localStorage
3. **Frontend sends token** → In `Authorization: Bearer {token}` header
4. **Backend verifies token** → Extracts user ID from token
5. **Request processed** → With user context

### Token Structure
```
Header: { alg: "HS256", typ: "JWT" }
Payload: { id: "userId", iat: timestamp, exp: expiration }
Signature: HMACSHA256(header + payload, JWT_SECRET)
```

### Usage
```javascript
// Frontend
const token = localStorage.getItem('authToken');
const response = await fetch('/api/auth/me', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

// Backend
const token = req.headers.authorization?.split(' ')[1];
const decoded = jwt.verify(token, process.env.JWT_SECRET);
const userId = decoded.id;
```

---

## 📊 Data Models

### User Model
```javascript
{
  firstName: String,
  lastName: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  avatar: String,
  role: String (user/admin),
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Hotel Model
```javascript
{
  name: String,
  description: String,
  location: String,
  city: String,
  price: Number,
  rating: Number,
  images: [String],
  amenities: [String],
  rooms: Number,
  maxGuests: Number,
  checkinTime: String,
  checkoutTime: String,
  owner: ObjectId (User),
  isActive: Boolean,
  bookedDates: [{checkIn, checkOut}],
  createdAt: Date,
  updatedAt: Date
}
```

### Booking Model
```javascript
{
  user: ObjectId (User),
  hotel: ObjectId (Hotel),
  checkIn: Date,
  checkOut: Date,
  guests: Number,
  rooms: Number,
  pricePerNight: Number,
  nights: Number,
  subtotal: Number,
  tax: Number,
  serviceFee: Number,
  totalPrice: Number,
  status: String (pending/confirmed/completed/cancelled),
  paymentStatus: String (unpaid/paid/refunded),
  notes: String,
  guestName: String,
  guestEmail: String,
  guestPhone: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Review Model
```javascript
{
  hotel: ObjectId (Hotel),
  user: ObjectId (User),
  booking: ObjectId (Booking),
  rating: Number,
  title: String,
  comment: String,
  cleanliness: Number,
  service: Number,
  value: Number,
  helpful: Number,
  verified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

---

## ❌ Error Handling

### Standard Error Response
```json
{
  "success": false,
  "message": "Error description",
  "error": {
    "status": 400,
    "message": "Bad Request"
  }
}
```

### Common Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Success |
| 201 | Created - Resource created |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Token missing/invalid |
| 403 | Forbidden - No permission |
| 404 | Not Found - Resource not found |
| 500 | Server Error - Internal error |

### Error Examples

**Missing Token:**
```
Status: 401
{ "message": "No token provided" }
```

**Invalid Token:**
```
Status: 401
{ "message": "Invalid or expired token" }
```

**Resource Not Found:**
```
Status: 404
{ "message": "Hotel not found" }
```

---

## 👨‍💻 Development

### Project Structure
```
backend/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   ├── authController.js     # Auth logic
│   ├── hotelController.js    # Hotel logic
│   ├── bookingController.js  # Booking logic
│   └── reviewController.js   # Review logic
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
├── app.js                    # Express app setup
├── server.js                 # Server entry point
├── .env                      # Environment variables
└── package.json
```

### Available Scripts

```bash
npm run dev      # Start development server (with hot-reload)
npm start        # Start production server
npm test         # Run tests (not configured yet)
```

### Adding a New Route

1. **Create controller** in `controllers/`
2. **Create route** in `routes/`
3. **Register route** in `app.js`
4. **Test with Postman/curl**

Example:
```javascript
// controllers/exampleController.js
export const example = (req, res) => {
  res.json({ message: "Hello" });
};

// routes/exampleRoutes.js
import { example } from '../controllers/exampleController.js';
const router = express.Router();
router.get('/example', example);

// app.js
import exampleRoutes from './routes/exampleRoutes.js';
app.use('/api/example', exampleRoutes);
```

---

## 🧪 Testing with curl

### Test Sign Up
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123",
    "confirmPassword": "password123"
  }'
```

### Test Get Hotels
```bash
curl http://localhost:5000/api/hotels?city=New%20York
```

### Test Protected Route
```bash
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer {your_token_here}"
```

---

## 🚀 Deployment

### Production Checklist

- [ ] Change `JWT_SECRET` to a strong random value
- [ ] Set `NODE_ENV=production`
- [ ] Use MongoDB Atlas (cloud) instead of local
- [ ] Set appropriate `CORS_ORIGIN` for frontend domain
- [ ] Enable HTTPS
- [ ] Add rate limiting
- [ ] Set up logging
- [ ] Configure error tracking (Sentry, etc.)
- [ ] Add input validation & sanitization
- [ ] Implement email verification
- [ ] Add payment gateway integration

---

## 📚 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.18.2 | Web framework |
| mongoose | ^7.6.3 | MongoDB ODM |
| jsonwebtoken | ^9.1.2 | JWT tokens |
| bcryptjs | ^2.4.3 | Password hashing |
| cors | ^2.8.5 | CORS handling |
| dotenv | ^16.3.1 | Environment variables |
| nodemon | ^3.0.1 | Dev hot-reload |

---

## 🆘 Troubleshooting

**MongoDB Connection Error**
```
Solution: Ensure MongoDB is running and MONGO_URI is correct
```

**JWT Error**
```
Solution: Check JWT_SECRET is set and token is valid
```

**CORS Error**
```
Solution: Update CORS_ORIGIN in .env to match frontend URL
```

**Port Already in Use**
```
Solution: Change PORT in .env or kill process on that port
```

---

## 📞 Support

For issues or questions:
1. Check `.env` configuration
2. Verify MongoDB connection
3. Review error logs
4. Check API documentation above

---

**Happy Coding! 🚀**
