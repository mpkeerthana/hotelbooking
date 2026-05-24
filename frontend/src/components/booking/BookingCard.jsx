export default function BookingCard({ booking }) {
  const statusColor = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-gray-900">{booking.hotelName}</h3>
          <p className="text-sm text-gray-600">{booking.location}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColor[booking.status]}`}>
          {booking.status}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-600">Check In</p>
          <p className="font-semibold text-gray-900">{booking.checkIn}</p>
        </div>
        <div>
          <p className="text-gray-600">Check Out</p>
          <p className="font-semibold text-gray-900">{booking.checkOut}</p>
        </div>
        <div>
          <p className="text-gray-600">Total</p>
          <p className="font-semibold text-gray-900">${booking.total}</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="flex-1 px-3 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 text-sm font-medium">
          View Details
        </button>
        {booking.status !== 'cancelled' && (
          <button className="flex-1 px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 text-sm font-medium">
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
