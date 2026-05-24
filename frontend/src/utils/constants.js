// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
  },
  HOTELS: {
    ALL: '/hotels',
    BY_ID: (id) => `/hotels/${id}`,
    SEARCH: '/hotels/search',
    FILTER: '/hotels/filter',
    REVIEWS: (id) => `/hotels/${id}/reviews`,
  },
  BOOKINGS: {
    ALL: '/bookings',
    BY_ID: (id) => `/bookings/${id}`,
    CREATE: '/bookings',
    CANCEL: (id) => `/bookings/${id}/cancel`,
  },
};

// Application constants
export const APP_NAME = 'TravelHub';
export const COMPANY_NAME = 'TravelHub Inc.';

// Status constants
export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
};

export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SUCCESS: 'success',
  FAILED: 'failed',
};

// Filter options
export const PRICE_RANGES = [
  { min: 0, max: 100, label: 'Under $100' },
  { min: 100, max: 250, label: '$100 - $250' },
  { min: 250, max: 500, label: '$250 - $500' },
  { min: 500, max: Infinity, label: 'Over $500' },
];

export const RATING_OPTIONS = [
  { value: 5, label: '5 Stars' },
  { value: 4, label: '4+ Stars' },
  { value: 3, label: '3+ Stars' },
  { value: 2, label: '2+ Stars' },
  { value: 1, label: '1+ Star' },
];

export const AMENITIES_LIST = [
  'WiFi',
  'Pool',
  'Gym',
  'Parking',
  'Restaurant',
  'Room Service',
  'Business Center',
  'Air Conditioning',
  'Fireplace',
  'Beach Access',
];

// Messages
export const MESSAGES = {
  SUCCESS: 'Operation completed successfully!',
  ERROR: 'An error occurred. Please try again.',
  BOOKING_CONFIRMED: 'Your booking has been confirmed!',
  BOOKING_CANCELLED: 'Your booking has been cancelled.',
  PROFILE_UPDATED: 'Profile updated successfully.',
};

// Toast durations
export const TOAST_DURATION = 3000;
export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning',
};
