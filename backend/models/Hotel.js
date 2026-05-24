import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide hotel name'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide description'],
    },
    location: {
      type: String,
      required: [true, 'Please provide location'],
    },
    city: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, 'Please provide price'],
      min: 0,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    amenities: [
      {
        type: String,
      },
    ],
    rooms: {
      type: Number,
      required: true,
      min: 1,
    },
    maxGuests: {
      type: Number,
      required: true,
      min: 1,
    },
    checkinTime: {
      type: String,
      default: '14:00',
    },
    checkoutTime: {
      type: String,
      default: '11:00',
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    bookedDates: [
      {
        checkIn: Date,
        checkOut: Date,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Hotel', hotelSchema);
