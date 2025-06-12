import axios from 'axios';

const HOST = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_PROD_API_URL
  : import.meta.env.VITE_DEV_API_URL || 'http://localhost:5000/api';

const API = axios.create({
  baseURL: `${HOST}/articles`,
});

// Add request interceptor to include auth token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Fetch all articles
export const fetchArticles = () => API.get('/');

// Fetch single article
export const fetchArticle = (id) => API.get(`/${id}`);

// Create article
export const createArticle = (article) => API.post('/', article);

// Update article
export const updateArticle = (id, article) => API.put(`/${id}`, article);

// Delete article
export const deleteArticle = (id) => API.delete(`/${id}`);

// Search articles
export const searchArticles = (query) => API.get(`/search?q=${query}`);

// Get articles by author
export const getArticlesByAuthor = (authorId) => API.get(`/author/${authorId}`); 