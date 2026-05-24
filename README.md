# TravelHub – Hotel Booking Web App

TravelHub is a full stack hotel booking web application where users can browse hotels, create accounts, login securely, and book hotels online.

---

## Live Demo

### Frontend
https://hotelbooking-frontend-ewkk.onrender.com

### Backend API
https://hotelbooking-backend-663i.onrender.com

---

## Features

- User Signup & Login Authentication
- JWT Based Authentication
- Hotel Search Functionality
- Hotel Booking System
- Protected Routes
- Responsive User Interface
- REST API Integration
- Backend Deployment with Render
- Frontend Deployment with Render

---

## Tech Stack

### Frontend
- React.js
- Vite
- Axios
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Mongoose

---

## Folder Structure

```bash
hotelbooking/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── server.js
```

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/mpkeerthana/hotelbooking.git
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Backend Setup

```bash
cd backend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the backend folder and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
PORT=4000
```

---

## API Endpoints

### Authentication
- POST `/api/auth/signup`
- POST `/api/auth/login`

### Hotels
- GET `/api/hotels`

### Booking
- POST `/api/bookings`

---

## Deployment

Frontend deployed on Render:
https://hotelbooking-frontend-ewkk.onrender.com

Backend deployed on Render:
https://hotelbooking-backend-663i.onrender.com

---

## Screenshots

<img width="1889" height="908" alt="Screenshot 2026-05-24 161920" src="https://github.com/user-attachments/assets/83ada160-7851-41fc-b7df-2a6224bf3e40" />
<img width="1894" height="903" alt="Screenshot 2026-05-24 161949" src="https://github.com/user-attachments/assets/86019375-42fa-44f1-8b95-20c94f924df6" />
<img width="1902" height="893" alt="Screenshot 2026-05-24 162012" src="https://github.com/user-attachments/assets/fc866925-3c8d-4330-9dc9-7aa94d5ebd93" />
<img width="1892" height="901" alt="Screenshot 2026-05-24 162029" src="https://github.com/user-attachments/assets/fbab2445-31ba-48f1-86f9-40b25734f50c" />
<img width="1884" height="908" alt="Screenshot 2026-05-24 162057" src="https://github.com/user-attachments/assets/3d256d1d-2e63-4d1d-a6a2-1427a8d63eb7" />



---

## Future Improvements

- Payment Gateway Integration
- Email Notifications
- Admin Dashboard
- Hotel Reviews & Ratings
- Booking History

---

## Author

### Keerthana MP

GitHub:
https://github.com/mpkeerthana

---
