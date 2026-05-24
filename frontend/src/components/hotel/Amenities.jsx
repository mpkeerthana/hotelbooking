export default function Amenities({ amenities }) {
  const amenityEmojis = {
    WiFi: '📶',
    Pool: '🏊',
    Gym: '💪',
    'Parking': '🅿️',
    'Air Conditioning': '❄️',
    'Restaurant': '🍽️',
    'Room Service': '🛎️',
    'Business Center': '💼',
  };

  return (
    <div className="bg-gray-50 p-6 rounded-2xl">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Amenities</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {amenities.map((amenity, idx) => (
          <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg">
            <span className="text-2xl">{amenityEmojis[amenity] || '✨'}</span>
            <span className="text-gray-700">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
