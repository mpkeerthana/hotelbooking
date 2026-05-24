import Hotel from '../models/Hotel.js';

// @desc    Get all hotels
// @route   GET /api/hotels
// @access  Public
export const getAllHotels = async (req, res) => {
  try {
    const { city, minPrice, maxPrice, rating } = req.query;
    let filter = { isActive: true };

    if (city) filter.city = { $regex: city, $options: 'i' };
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseFloat(minPrice);
      if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
    }
    if (rating) filter.rating = { $gte: parseFloat(rating) };

    const hotels = await Hotel.find(filter).populate('owner', 'firstName lastName email');

    res.json({
      success: true,
      count: hotels.length,
      data: hotels,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single hotel
// @route   GET /api/hotels/:id
// @access  Public
export const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id).populate('owner', 'firstName lastName email');

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.json({
      success: true,
      data: hotel,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Search hotels
// @route   POST /api/hotels/search
// @access  Public
export const searchHotels = async (req, res) => {
  try {
    const { location, checkIn, checkOut, guests } = req.body;

    if (!location || !checkIn || !checkOut) {
      return res.status(400).json({ message: 'Please provide location, checkIn, and checkOut' });
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkInDate >= checkOutDate) {
      return res.status(400).json({ message: 'Check-in must be before check-out' });
    }

    const hotels = await Hotel.find({
      isActive: true,
      location: { $regex: location, $options: 'i' },
      maxGuests: { $gte: guests || 1 },
      'bookedDates.checkIn': { $not: { $gte: checkInDate, $lt: checkOutDate } },
    }).populate('owner', 'firstName lastName email');

    res.json({
      success: true,
      count: hotels.length,
      data: hotels,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create hotel
// @route   POST /api/hotels
// @access  Private (Admin/Owner)
export const createHotel = async (req, res) => {
  try {
    const { name, description, location, city, price, images, amenities, rooms, maxGuests } =
      req.body;

    if (!name || !description || !location || !city || !price || !images || !rooms || !maxGuests) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const hotel = await Hotel.create({
      name,
      description,
      location,
      city,
      price,
      images,
      amenities,
      rooms,
      maxGuests,
      owner: req.userId,
    });

    res.status(201).json({
      success: true,
      data: hotel,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update hotel
// @route   PUT /api/hotels/:id
// @access  Private (Owner)
export const updateHotel = async (req, res) => {
  try {
    let hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    // Check ownership
    if (hotel.owner.toString() !== req.userId && req.userRole !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this hotel' });
    }

    hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    res.json({
      success: true,
      data: hotel,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete hotel
// @route   DELETE /api/hotels/:id
// @access  Private (Owner)
export const deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    // Check ownership
    if (hotel.owner.toString() !== req.userId && req.userRole !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this hotel' });
    }

    await Hotel.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Hotel deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get hotel availability
// @route   POST /api/hotels/:id/availability
// @access  Public
export const getHotelAvailability = async (req, res) => {
  try {
    const { checkIn, checkOut } = req.body;
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const isAvailable = !hotel.bookedDates.some(
      (booking) => checkInDate < booking.checkOut && checkOutDate > booking.checkIn
    );

    res.json({
      success: true,
      available: isAvailable,
      bookedDates: hotel.bookedDates,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
