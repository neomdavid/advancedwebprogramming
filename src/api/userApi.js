import axios from 'axios';

const HOST = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_PROD_API_URL
  : import.meta.env.VITE_DEV_API_URL || 'http://localhost:5000/api';

const API = axios.create({
  baseURL: `${HOST}/users`,
});

// Add request interceptor to include auth token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Fetch users
export const fetchUsers = () => API.get('/');

// Create user
export const createUser = (user) => API.post('/', user);

// Update user
export const updateUser = (id, user) => API.put(`/${id}`, user);

// Delete user
export const deleteUser = (id) => API.delete(`/${id}`);

// Login user
export const loginUser = (credentials) => API.post('/login', credentials);

// Fetch user stats
export const fetchUserStats = () => API.get('/stats');

// Get user profile
export const getUserProfile = () => API.get('/profile');

// Update user profile
export const updateUserProfile = (profile) => API.put('/profile', profile);

// Change password
export const changePassword = (passwords) => API.post('/change-password', passwords);

// Forgot password
export const forgotPassword = (email) => API.post('/forgot-password', { email });

// Reset password
export const resetPassword = (token, password) => API.post('/reset-password', { token, password }); 