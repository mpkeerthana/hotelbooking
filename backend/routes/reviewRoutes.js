import express from 'express';
import {
  createReview,
  getHotelReviews,
  updateReview,
  deleteReview,
  markHelpful,
} from '../controllers/reviewController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/hotels/:hotelId/reviews', getHotelReviews);

// Protected routes
router.post('/hotels/:hotelId/reviews', authMiddleware, createReview);
router.put('/:id', authMiddleware, updateReview);
router.delete('/:id', authMiddleware, deleteReview);
router.post('/:id/helpful', markHelpful);

export default router;
