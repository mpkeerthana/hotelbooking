import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import BookingCard from '../components/booking/BookingCard';
import Button from '../components/common/Button';
import { BookingContext } from '../context/BookingContext';

export default function MyBookings() {
  const { bookings } = useContext(BookingContext);
  const navigate = useNavigate();

  const upcomingBookings = bookings.filter(
    (b) => b.status.toLowerCase() !== 'cancelled' && new Date(b.checkIn) >= new Date(new Date().setHours(0, 0, 0, 0))
  ).reverse();
  
  const pastBookings = bookings.filter(
    (b) => b.status.toLowerCase() === 'cancelled' || new Date(b.checkIn) < new Date(new Date().setHours(0, 0, 0, 0))
  ).reverse();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
          <p className="text-gray-600">Manage your hotel reservations</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Bookings</h2>
          {upcomingBookings.length > 0 ? (
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">No upcoming bookings</p>
              <Button onClick={() => navigate('/explore')}>Book Now</Button>
            </div>
          )}
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Past Bookings</h2>
          {pastBookings.length > 0 ? (
            <div className="space-y-4">
              {pastBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No past bookings</p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
