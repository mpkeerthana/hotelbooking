import apiClient from './api';

export const authService = {
  login: async (email, password) => {
    console.log('[authService] login request', { email });
    const response = await apiClient.post('/auth/login', { email, password });
    console.log('[authService] login response', response.data);
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    return response.data;
  },

  signup: async (userData) => {
    const response = await apiClient.post('/auth/signup', userData);
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('authToken');
  },

  getCurrentUser: async () => {
    const response = await apiClient.get('/auth/me');
    return response.data;
  },

  updateProfile: async (userData) => {
    const response = await apiClient.put('/auth/profile', userData);
    return response.data;
  },

  changePassword: async (oldPassword, newPassword) => {
    const response = await apiClient.post('/auth/change-password', {
      oldPassword,
      newPassword,
    });
    return response.data;
  },

  resetPassword: async (email, newPassword, confirmPassword) => {
    const response = await apiClient.post('/auth/reset-password', {
      email,
      newPassword,
      confirmPassword,
    });
    return response.data;
  },
};
