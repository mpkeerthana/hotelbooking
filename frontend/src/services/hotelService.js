import apiClient from './api';

export const hotelService = {
  getAllHotels: async (filters = {}) => {
    const response = await apiClient.get('/hotels', { params: filters });
    return response.data;
  },

  getHotelById: async (hotelId) => {
    const response = await apiClient.get(`/hotels/${hotelId}`);
    return response.data;
  },

  searchHotels: async (searchParams) => {
    const response = await apiClient.post('/hotels/search', searchParams);
    return response.data;
  },

  filterHotels: async (filters) => {
    const response = await apiClient.post('/hotels/filter', filters);
    return response.data;
  },

  getHotelReviews: async (hotelId) => {
    const response = await apiClient.get(`/hotels/${hotelId}/reviews`);
    return response.data;
  },

  addReview: async (hotelId, reviewData) => {
    const response = await apiClient.post(`/hotels/${hotelId}/reviews`, reviewData);
    return response.data;
  },

  getAvailability: async (hotelId, dates) => {
    const response = await apiClient.post(`/hotels/${hotelId}/availability`, dates);
    return response.data;
  },
};
