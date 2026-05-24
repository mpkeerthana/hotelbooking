import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import HotelGallery from '../components/hotel/HotelGallery';
import Amenities from '../components/hotel/Amenities';
import ReviewCard from '../components/hotel/ReviewCard';
import BookingForm from '../components/booking/BookingForm';
import Button from '../components/common/Button';
import { INITIAL_HOTELS } from '../utils/mockHotels';

export default function HotelDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const hotel = INITIAL_HOTELS.find((h) => h.id === parseInt(id)) || INITIAL_HOTELS[0];

  const handleBooking = (formData) => {
    if (!formData.checkIn || !formData.checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }
    navigate('/booking', { state: { bookingDetails: formData, hotel: hotel } });
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <button onClick={() => navigate(-1)} className="text-blue-600 hover:text-blue-700 font-semibold">← Back</button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <HotelGallery images={hotel.images} />

            <div>
              <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
              <p className="text-gray-600 mt-2">{hotel.location}</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-lg">{'⭐'.repeat(Math.floor(hotel.rating))}</span>
                <span className="text-lg font-semibold text-gray-900">{hotel.rating}/5</span>
                <a href="#reviews" className="text-blue-600 hover:text-blue-700">
                  ({hotel.reviews} reviews)
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">About</h3>
              <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
            </div>

            <Amenities amenities={hotel.amenities} />

            <div id="reviews" className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Guest Reviews</h3>
              {hotel.reviewList.map((review, idx) => (
                <ReviewCard key={idx} review={review} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24 space-y-4">
              <div>
                <p className="text-gray-600 text-sm">Price per night</p>
                <p className="text-4xl font-bold text-gray-900">${hotel.price}</p>
              </div>

              <BookingForm onSubmit={handleBooking} />

              <Button variant="outline" className="w-full">
                ❤️ Add to Wishlist
              </Button>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
                ✓ Free cancellation until 24 hours before check-in
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
