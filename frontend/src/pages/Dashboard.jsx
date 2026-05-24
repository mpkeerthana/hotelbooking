import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Button from '../components/common/Button';
import { BookingContext } from '../context/BookingContext';

export default function Dashboard() {
  const { bookings } = useContext(BookingContext);
  const navigate = useNavigate();

  const totalBookings = bookings.length;
  const upcomingTrips = bookings.filter(
    (b) => new Date(b.checkIn) >= new Date(new Date().setHours(0, 0, 0, 0)) && b.status !== 'cancelled'
  ).length;
  const moneySpent = bookings.reduce((sum, b) => sum + (b.total || 0), 0);

  const stats = [
    { label: 'Total Bookings', value: totalBookings.toString(), icon: '📅' },
    { label: 'Upcoming Trips', value: upcomingTrips.toString(), icon: '✈️' },
    { label: 'Money Spent', value: `$${moneySpent.toLocaleString()}`, icon: '💰' },
  ];

  const recentBookings = [...bookings].reverse().slice(0, 3);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back! 👋</h1>
          <p className="text-gray-600 dark:text-gray-400">Here's your booking summary</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                </div>
                <span className="text-3xl">{stat.icon}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Bookings</h2>
          <div className="space-y-3">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{booking.hotelName}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{booking.location} • {booking.checkIn} to {booking.checkOut}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                  booking.status.toLowerCase() === 'confirmed'
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
                    : booking.status.toLowerCase() === 'cancelled'
                    ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100'
                    : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100'
                }`}>
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
          <Button onClick={() => navigate('/bookings')} className="mt-4 w-full">View All Bookings</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
