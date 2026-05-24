import Booking from '../models/Booking.js';
import Hotel from '../models/Hotel.js';

// @desc    Create booking
// @route   POST /api/bookings
// @access  Private
export const createBooking = async (req, res) => {
  try {
    const { hotelId, checkIn, checkOut, guests, rooms, pricePerNight, guestName, guestEmail, guestPhone, notes } =
      req.body;

    if (!hotelId || !checkIn || !checkOut || !guests || !rooms) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkInDate >= checkOutDate) {
      return res.status(400).json({ message: 'Check-in must be before check-out' });
    }

    // Calculate nights and prices
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const subtotal = pricePerNight * nights * rooms;
    const tax = Math.round(subtotal * 0.15 * 100) / 100;
    const serviceFee = 30;
    const totalPrice = subtotal + tax + serviceFee;

    // Check hotel availability
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    if (guests > hotel.maxGuests) {
      return res.status(400).json({ message: `Maximum guests allowed: ${hotel.maxGuests}` });
    }

    // Create booking
    const booking = await Booking.create({
      user: req.userId,
      hotel: hotelId,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests,
      rooms,
      pricePerNight,
      nights,
      subtotal,
      tax,
      serviceFee,
      totalPrice,
      guestName,
      guestEmail,
      guestPhone,
      notes,
    });

    // Add to hotel's booked dates
    await Hotel.findByIdAndUpdate(hotelId, {
      $push: { bookedDates: { checkIn: checkInDate, checkOut: checkOutDate } },
    });

    const populatedBooking = await booking.populate('hotel user');

    res.status(201).json({
      success: true,
      data: populatedBooking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all bookings for user
// @route   GET /api/bookings
// @access  Private
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId })
      .populate('hotel')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single booking
// @route   GET /api/bookings/:id
// @access  Private
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('hotel user');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Check ownership
    if (booking.user._id.toString() !== req.userId && req.userRole !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to view this booking' });
    }

    res.json({
      success: true,
      data: booking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Cancel booking
// @route   POST /api/bookings/:id/cancel
// @access  Private
export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Check ownership
    if (booking.user.toString() !== req.userId && req.userRole !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to cancel this booking' });
    }

    if (booking.status === 'cancelled') {
      return res.status(400).json({ message: 'Booking is already cancelled' });
    }

    booking.status = 'cancelled';
    if (booking.paymentStatus === 'paid') {
      booking.paymentStatus = 'refunded';
    }
    await booking.save();

    // Remove from hotel's booked dates
    await Hotel.findByIdAndUpdate(booking.hotel, {
      $pull: {
        bookedDates: {
          checkIn: booking.checkIn,
          checkOut: booking.checkOut,
        },
      },
    });

    res.json({
      success: true,
      message: 'Booking cancelled successfully',
      data: booking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id
// @access  Private (Admin)
export const updateBooking = async (req, res) => {
  try {
    const { status, paymentStatus } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status, paymentStatus },
      { new: true, runValidators: true }
    ).populate('hotel user');

    res.json({
      success: true,
      data: booking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Process payment
// @route   POST /api/bookings/:id/payment
// @access  Private
export const processPayment = async (req, res) => {
  try {
    const { paymentMethod } = req.body;

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Simulate payment processing
    booking.paymentStatus = 'paid';
    booking.status = 'confirmed';
    await booking.save();

    res.json({
      success: true,
      message: 'Payment processed successfully',
      data: booking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
