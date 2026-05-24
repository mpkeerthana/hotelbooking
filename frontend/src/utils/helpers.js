// Helper functions for date formatting
export const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatDateShort = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
};

export const calculateNights = (checkIn, checkOut) => {
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.abs(checkOutDate - checkInDate);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const calculateTotal = (pricePerNight, nights, tax = 0.15, serviceFee = 30) => {
  const subtotal = pricePerNight * nights;
  const taxAmount = subtotal * tax;
  return Math.round(subtotal + taxAmount + serviceFee);
};

// String utilities
export const truncate = (str, length) => {
  return str.length > length ? str.substring(0, length) + '...' : str;
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Number utilities
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const roundToTwo = (num) => {
  return Math.round(num * 100) / 100;
};
