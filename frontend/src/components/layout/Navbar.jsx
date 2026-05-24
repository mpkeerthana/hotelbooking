import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../common/Button';
import { AuthContext } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4 flex-1">
          <input
            type="text"
            placeholder="Search hotels..."
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
          />
        </div>

        <div className="flex items-center gap-6">
          <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            🔔
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold"
            >
              {user?.name ? user.name[0].toUpperCase() : 'U'}
            </button>
            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 border dark:border-gray-700">
                <Link to="/settings" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Profile
                </Link>
                <Link to="/settings" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Settings
                </Link>
                <hr className="my-2 dark:border-gray-700" />
                <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
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
