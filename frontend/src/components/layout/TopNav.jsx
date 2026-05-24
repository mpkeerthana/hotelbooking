import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function TopNav() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
            >
              🏨 StayHub
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => navigate('/')}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </button>

            {isAuthenticated && (
              <>
                <button
                  onClick={() => navigate('/explore')}
                  className="text-gray-700 hover:text-blue-600 font-medium transition"
                >
                  Explore
                </button>
                <button
                  onClick={() => navigate('/bookings')}
                  className="text-gray-700 hover:text-blue-600 font-medium transition"
                >
                  My Bookings
                </button>
              </>
            )}
          </div>

          {/* Auth Buttons / User Profile */}
          <div className="flex items-center gap-4">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate('/settings')}
                  className="text-gray-700 hover:text-blue-600 font-medium transition"
                >
                  Settings
                </button>
                <button
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
