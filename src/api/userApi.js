import axios from 'axios';

const HOST = import.meta.env.VITE_API_HOST || 'http://localhost:5000/api';

const API = axios.create({
  baseURL: `${HOST}/users`,
});

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