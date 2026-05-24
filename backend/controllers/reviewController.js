import Review from '../models/Review.js';
import Booking from '../models/Booking.js';
import Hotel from '../models/Hotel.js';

// @desc    Create review
// @route   POST /api/hotels/:hotelId/reviews
// @access  Private
export const createReview = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const { rating, title, comment, cleanliness, service, value, bookingId } = req.body;

    if (!rating || !title || !comment) {
      return res.status(400).json({ message: 'Please provide rating, title, and comment' });
    }

    // Check if user has booked this hotel
    let verified = false;
    if (bookingId) {
      const booking = await Booking.findOne({
        _id: bookingId,
        user: req.userId,
        hotel: hotelId,
        status: 'completed',
      });
      verified = !!booking;
    }

    const review = await Review.create({
      hotel: hotelId,
      user: req.userId,
      booking: bookingId,
      rating,
      title,
      comment,
      cleanliness,
      service,
      value,
      verified,
    });

    // Update hotel rating
    const reviews = await Review.find({ hotel: hotelId });
    const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    await Hotel.findByIdAndUpdate(hotelId, { rating: avgRating });

    const populatedReview = await review.populate('user', 'firstName lastName avatar');

    res.status(201).json({
      success: true,
      data: populatedReview,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get hotel reviews
// @route   GET /api/hotels/:hotelId/reviews
// @access  Public
export const getHotelReviews = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const { rating, sort } = req.query;

    let filter = { hotel: hotelId };
    if (rating) {
      filter.rating = { $gte: parseInt(rating) };
    }

    const sortOption = sort === 'helpful' ? { helpful: -1 } : { createdAt: -1 };

    const reviews = await Review.find(filter)
      .populate('user', 'firstName lastName avatar')
      .sort(sortOption);

    const avgRating =
      reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;

    res.json({
      success: true,
      count: reviews.length,
      avgRating: avgRating.toFixed(1),
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update review
// @route   PUT /api/reviews/:id
// @access  Private
export const updateReview = async (req, res) => {
  try {
    let review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    // Check ownership
    if (review.user.toString() !== req.userId) {
      return res.status(403).json({ message: 'Not authorized to update this review' });
    }

    review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate('user', 'firstName lastName avatar');

    res.json({
      success: true,
      data: review,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete review
// @route   DELETE /api/reviews/:id
// @access  Private
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    // Check ownership
    if (review.user.toString() !== req.userId && req.userRole !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this review' });
    }

    await Review.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Review deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Mark review as helpful
// @route   POST /api/reviews/:id/helpful
// @access  Public
export const markHelpful = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { $inc: { helpful: 1 } },
      { new: true }
    );

    res.json({
      success: true,
      data: review,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
