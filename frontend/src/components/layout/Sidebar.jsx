import { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { icon: '🏠', label: 'Dashboard', path: '/dashboard' },
  { icon: '🔍', label: 'Explore Hotels', path: '/explore' },
  { icon: '📅', label: 'My Bookings', path: '/bookings' },
  { icon: '❤️', label: 'Wishlist', path: '/wishlist' },
  { icon: '⭐', label: 'Reviews', path: '/reviews' },
  { icon: '⚙️', label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-gray-900 text-white transition-all duration-300 min-h-screen flex flex-col`}
    >
      <div className="p-6 border-b border-gray-800 flex justify-between items-center">
        {!isCollapsed && <h1 className="text-2xl font-bold">TravelHub</h1>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-xl hover:bg-gray-800 p-2 rounded"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          {isCollapsed ? '🚀' : 'Upgrade Plan'}
        </button>
      </div>
    </aside>
  );
}
