import axios from 'axios';

const HOST = import.meta.env.VITE_API_HOST || 'http://localhost:5000/api';

const API = axios.create({
  baseURL: `${HOST}/articles`,
});

export const fetchArticles = () => API.get('/');
export const fetchArticle = (id) => API.get(`/${id}`);
export const createArticle = (article) => API.post('/', article);
export const updateArticle = (id, article) => API.put(`/${id}`, article);
export const deleteArticle = (id) => API.delete(`/${id}`); 