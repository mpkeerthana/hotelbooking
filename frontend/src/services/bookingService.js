import apiClient from './api';

export const bookingService = {
  createBooking: async (bookingData) => {
    const response = await apiClient.post('/bookings', bookingData);
    return response.data;
  },

  getBookings: async () => {
    const response = await apiClient.get('/bookings');
    return response.data;
  },

  getBookingById: async (bookingId) => {
    const response = await apiClient.get(`/bookings/${bookingId}`);
    return response.data;
  },

  updateBooking: async (bookingId, updateData) => {
    const response = await apiClient.put(`/bookings/${bookingId}`, updateData);
    return response.data;
  },

  cancelBooking: async (bookingId) => {
    const response = await apiClient.post(`/bookings/${bookingId}/cancel`);
    return response.data;
  },

  getBookingHistory: async () => {
    const response = await apiClient.get('/bookings/history');
    return response.data;
  },

  initiatePayment: async (bookingId, paymentData) => {
    const response = await apiClient.post(`/bookings/${bookingId}/payment`, paymentData);
    return response.data;
  },
};
