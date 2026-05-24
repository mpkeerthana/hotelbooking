import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { WishlistContext } from '../../context/WishlistContext';

export default function HotelCard({ hotel }) {
  const navigate = useNavigate();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  
  const isWishlisted = isInWishlist(hotel.id);

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(hotel.id);
    } else {
      addToWishlist(hotel);
    }
  };

  return (
    <div 
      onClick={() => navigate(`/hotel/${hotel.id}`)}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={hotel.image || 'https://via.placeholder.com/300x200'}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-red-50 z-10 flex items-center justify-center w-8 h-8 text-sm"
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>
        <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          ${hotel.price}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900">{hotel.name}</h3>
        <p className="text-gray-600 text-sm">{hotel.location}</p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-1">
            {'⭐'.repeat(Math.floor(hotel.rating))}
            <span className="text-sm text-gray-600">({hotel.reviews})</span>
          </div>
          <span className="text-sm font-semibold text-gray-700">{hotel.rating}/5</span>
        </div>

        <div className="mt-4 flex gap-2">
          {hotel.amenities?.slice(0, 2).map((amenity, idx) => (
            <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {amenity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
