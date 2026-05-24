import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import HotelGrid from '../components/hotel/HotelGrid';
import Button from '../components/common/Button';
import { WishlistContext } from '../context/WishlistContext';

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
          <p className="text-gray-600">Your saved hotels for later</p>
        </div>

        {wishlist.length > 0 ? (
          <div>
            <p className="text-gray-600 mb-6">You have {wishlist.length} hotels saved</p>
            <HotelGrid hotels={wishlist} loading={false} />
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-600 mb-4 text-lg">Your wishlist is empty</p>
            <Button onClick={() => navigate('/explore')}>Explore Hotels</Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
