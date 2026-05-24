import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import FilterSidebar from '../components/filters/FilterSidebar';
import HotelGrid from '../components/hotel/HotelGrid';
import Button from '../components/common/Button';
import { INITIAL_HOTELS } from '../utils/mockHotels';

export default function ExploreHotels() {
  const [hotels, setHotels] = useState(INITIAL_HOTELS);

  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  const [activeFilters, setActiveFilters] = useState({
    price: [50, 500],
    rating: 0,
    location: 'All Locations'
  });

  const applyFiltersAndSort = (filters, sort) => {
    let result = [...INITIAL_HOTELS];

    if (filters.location && filters.location !== 'All Locations') {
      result = result.filter(h => h.location.includes(filters.location));
    }
    if (filters.rating > 0) {
      result = result.filter(h => h.rating >= filters.rating);
    }
    result = result.filter(h => h.price >= filters.price[0] && h.price <= filters.price[1]);

    if (sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    setHotels(result);
  };

  const handleSort = (e) => {
    const newSort = e.target.value;
    setSortBy(newSort);
    applyFiltersAndSort(activeFilters, newSort);
  };

  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
    applyFiltersAndSort(filters, sortBy);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Explore Hotels</h1>
          <p className="text-gray-600">Find your perfect stay</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600">Showing {hotels.length} hotels</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowFilters((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            <select
              value={sortBy}
              onChange={handleSort}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="popular">Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <FilterSidebar onFilterChange={handleFilterChange} />
          </div>
          <div className="lg:col-span-3">
            <HotelGrid hotels={hotels} loading={false} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
