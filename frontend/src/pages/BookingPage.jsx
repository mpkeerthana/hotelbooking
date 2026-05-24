import { useState, useMemo } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import DashboardLayout from '../layouts/DashboardLayout';
import Button from '../components/common/Button';
import PaymentForm from '../components/booking/PaymentForm';

// Mock Stripe public key for frontend prototype
const stripePromise = loadStripe('pk_test_51MockStripeKeyForFrontendPrototypingOnly12345');

export default function BookingPage() {
  const location = useLocation();
  const [showPayment, setShowPayment] = useState(false);

  // If no state is passed, redirect to explore
  if (!location.state || !location.state.hotel || !location.state.bookingDetails) {
    return <Navigate to="/explore" replace />;
  }

  const { hotel, bookingDetails } = location.state;

  const booking = useMemo(() => {
    const start = new Date(bookingDetails.checkIn);
    const end = new Date(bookingDetails.checkOut);
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    const nights = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));

    const pricePerNight = hotel.price;
    const subtotal = pricePerNight * nights * bookingDetails.rooms;
    const tax = Math.round(subtotal * 0.12);
    const serviceFee = 30;

    return {
      hotel: hotel,
      hotelName: hotel.name,
      location: hotel.location,
      checkIn: bookingDetails.checkIn,
      checkOut: bookingDetails.checkOut,
      nights,
      roomType: 'Standard Room',
      guests: bookingDetails.guests,
      rooms: bookingDetails.rooms,
      pricePerNight,
      subtotal,
      tax,
      serviceFee,
      total: subtotal + tax + serviceFee,
    };
  }, [hotel, bookingDetails]);

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Confirm Your Booking</h1>
          <p className="text-gray-600 mt-2">Review your booking details before payment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Hotel</span>
                  <span className="font-semibold text-gray-900">{booking.hotelName}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Location</span>
                  <span className="font-semibold text-gray-900">{booking.location}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Check In</span>
                  <span className="font-semibold text-gray-900">{booking.checkIn}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Check Out</span>
                  <span className="font-semibold text-gray-900">{booking.checkOut}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Room Type</span>
                  <span className="font-semibold text-gray-900">{booking.roomType}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Guests</span>
                  <span className="font-semibold text-gray-900">{booking.guests}</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guest Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24 space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Price Breakdown</h3>

              <div className="space-y-2 pb-4 border-b">
                <div className="flex justify-between">
                  <span className="text-gray-600">${booking.pricePerNight} × {booking.nights} nights</span>
                  <span className="font-semibold">${booking.subtotal}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${booking.tax}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Fee</span>
                  <span>${booking.serviceFee}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-blue-600">${booking.total}</span>
                </div>
              </div>

              {!showPayment ? (
                <Button onClick={() => setShowPayment(true)} className="w-full bg-green-600 hover:bg-green-700">
                  Proceed to Payment
                </Button>
              ) : (
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Information</h3>
                  <Elements stripe={stripePromise}>
                    <PaymentForm booking={booking} />
                  </Elements>
                </div>
              )}

              <p className="text-xs text-gray-600 text-center">
                🔒 Secure payment powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
