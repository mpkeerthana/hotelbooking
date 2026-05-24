import { useState, useContext, useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Button from '../components/common/Button';
import { AuthContext } from '../context/AuthContext';

export default function Settings() {
  const { user, updateUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [notifications, setNotifications] = useState({
    emailBookings: true,
    smsCheckIn: true,
    promotions: true,
    reviewReminders: true,
  });

  const notificationOptions = [
    { id: 'emailBookings', label: 'Email notifications for bookings' },
    { id: 'smsCheckIn', label: 'SMS reminders for check-in' },
    { id: 'promotions', label: 'Promotional offers and deals' },
    { id: 'reviewReminders', label: 'Review reminders' },
  ];

  const handleNotificationChange = (id) => {
    setNotifications((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSaveNotifications = () => {
    alert('Notification preferences saved successfully!');
  };

  useEffect(() => {
    if (user) {
      const parts = user.name ? user.name.split(' ') : [];
      setProfileData({
        firstName: parts[0] || '',
        lastName: parts.slice(1).join(' ') || '',
        email: user.email || '',
        phone: '',
      });
    }
  }, [user]);

  const handleSaveProfile = () => {
    updateUser({
      name: `${profileData.firstName} ${profileData.lastName}`.trim(),
      email: profileData.email,
    });
    alert('Profile updated successfully!');
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your account preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <div className="space-y-1 p-4">
              {[
                { id: 'profile', label: 'Profile' },
                { id: 'password', label: 'Change Password' },
                { id: 'notifications', label: 'Notifications' },
                { id: 'privacy', label: 'Privacy' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Profile Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) =>
                        setProfileData({ ...profileData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) =>
                        setProfileData({ ...profileData, lastName: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData({ ...profileData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button onClick={handleSaveProfile} className="bg-green-600 hover:bg-green-700">Save Changes</Button>
              </div>
            )}

            {activeTab === 'password' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Change Password</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button className="bg-green-600 hover:bg-green-700">Update Password</Button>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Notification Preferences</h2>
                <div className="space-y-3">
                  {notificationOptions.map((option) => (
                    <label key={option.id} className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={notifications[option.id]}
                        onChange={() => handleNotificationChange(option.id)}
                        className="w-4 h-4 dark:bg-gray-800 dark:border-gray-600" 
                      />
                      <span className="text-gray-700 dark:text-gray-300">{option.label}</span>
                    </label>
                  ))}
                </div>
                <Button onClick={handleSaveNotifications} className="bg-green-600 hover:bg-green-700">Save Preferences</Button>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Privacy & Security</h2>
                <div className="space-y-4">
                  <div className="border-b dark:border-gray-700 pb-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Account Privacy</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Your personal information is protected with end-to-end encryption.
                    </p>
                  </div>
                  <div className="border-b dark:border-gray-700 pb-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Delete Account</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      Permanently delete your account and all associated data.
                    </p>
                    <Button variant="danger">Delete Account</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h3 className="font-semibold text-red-900 dark:text-red-400 mb-2">Danger Zone</h3>
          <p className="text-red-800 dark:text-red-300 text-sm mb-4">
            Once you log out from all devices, you will need to log in again to access your account.
          </p>
          <Button variant="danger">Logout from All Devices</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
