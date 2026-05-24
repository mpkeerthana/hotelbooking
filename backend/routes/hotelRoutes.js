import express from 'express';
import {
  getAllHotels,
  getHotelById,
  searchHotels,
  createHotel,
  updateHotel,
  deleteHotel,
  getHotelAvailability,
} from '../controllers/hotelController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllHotels);
router.get('/:id', getHotelById);
router.post('/search', searchHotels);
router.post('/availability/:id', getHotelAvailability);

// Protected routes
router.post('/', authMiddleware, createHotel);
router.put('/:id', authMiddleware, updateHotel);
router.delete('/:id', authMiddleware, deleteHotel);

export default router;
