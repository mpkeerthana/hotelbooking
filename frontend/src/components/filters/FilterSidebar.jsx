import { useState } from 'react';
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';

export default function FilterSidebar({ onFilterChange }) {
  const [price, setPrice] = useState([50, 500]);
  const [rating, setRating] = useState(0);
  const [location, setLocation] = useState('All Locations');

  const handleApply = () => {
    onFilterChange({ price, rating, location });
  };

  const handleReset = () => {
    setPrice([50, 500]);
    setRating(0);
    setLocation('All Locations');
    onFilterChange({ price: [50, 500], rating: 0, location: 'All Locations' });
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg h-fit">
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Filters</h3>
      </div>

      <PriceFilter price={price} onChange={setPrice} />
      
      <RatingFilter rating={rating} onChange={setRating} />

      <div>
        <label className="text-gray-700 font-semibold mb-3 block">Location</label>
        <select 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option>All Locations</option>
          <option>New York</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
          <option>Miami</option>
        </select>
      </div>

      <button onClick={handleApply} className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
        Apply Filters
      </button>
      <button onClick={handleReset} className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold">
        Reset
      </button>
    </div>
  );
}
