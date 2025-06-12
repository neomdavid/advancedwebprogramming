import React, { useState, useEffect } from 'react';
import '../styles/UserManagement.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchArticles, createArticle, updateArticle, deleteArticle } from '../api/articleApi';
import CircularProgress from '@mui/material/CircularProgress';

const initialForm = {
  title: '',
  content: '',
  author: '',
  date: '',
  image: '',
};

const ArticleManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState(initialForm);
  const [editingArticle, setEditingArticle] = useState(null);
  const [error, setError] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);
  const [loading, setLoading] = useState({
    fetch: true,
    create: false,
    update: false,
    delete: false
  });

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    setLoading(prev => ({ ...prev, fetch: true }));
    try {
      const { data } = await fetchArticles();
      setArticles(data.articles || data); 
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch articles');
    } finally {
      setLoading(prev => ({ ...prev, fetch: false }));
    }
  };

  const handleAddArticle = async (e) => {
    e.preventDefault();
    setLoading(prev => ({ ...prev, create: true }));
    try {
      const contentArray = formData.content
        .split('\n')
        .filter(line => line.trim() !== '')
        .map(line => ({ type: 'paragraph', text: line }));
      const article = {
        ...formData,
        content: contentArray,
      };
      await createArticle(article);
      setShowModal(false);
      setFormData(initialForm);
      loadArticles();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create article');
    } finally {
      setLoading(prev => ({ ...prev, create: false }));
    }
  };

  const handleEditArticle = (article) => {
    setEditingArticle(article);
    setFormData({
      ...article,
      content: Array.isArray(article.content)
        ? article.content.map(p => p.text).join('\n')
        : '',
    });
    setShowModal(true);
  };

  const handleUpdateArticle = async (e) => {
    e.preventDefault();
    setLoading(prev => ({ ...prev, update: true }));
    try {
      const contentArray = formData.content
        .split('\n')
        .filter(line => line.trim() !== '')
        .map(line => ({ type: 'paragraph', text: line }));
      const article = {
        ...formData,
        content: contentArray,
      };
      await updateArticle(editingArticle._id, article);
      setEditingArticle(null);
      setShowModal(false);
      setFormData(initialForm);
      loadArticles();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update article');
    } finally {
      setLoading(prev => ({ ...prev, update: false }));
    }
  };

  const handleDeleteArticle = async () => {
    if (!articleToDelete) return;
    setLoading(prev => ({ ...prev, delete: true }));
    try {
      await deleteArticle(articleToDelete._id);
      setShowDeleteModal(false);
      setArticleToDelete(null);
      loadArticles();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete article');
    } finally {
      setLoading(prev => ({ ...prev, delete: false }));
    }
  };

  const truncateContent = (content) => {
    if (!Array.isArray(content)) return '';
    const text = content.map(p => p.text).join(' ');
    return text.length > 150 ? text.substring(0, 150) + '...' : text;
  };

  if (loading.fetch) {
    return (
      <div className="loading-container">
        <CircularProgress />
        <p>Loading articles...</p>
      </div>
    );
  }

  return (
    <div className="user-management">
      <div className="page-header">
        <h1>Articles Management</h1>
        <button 
          className="add-user-btn" 
          onClick={() => { setShowModal(true); setEditingArticle(null); setFormData(initialForm); }}
          disabled={loading.create || loading.update}
        >
          <EditIcon /> Add New Article
        </button>
      </div>
  
      {error && <div className="error-message">{error}</div>}
      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Author</th>
              <th>Date</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map(article => (
              <tr key={article._id}>
                <td>{article.title}</td>
                <td style={{ maxWidth: 300, whiteSpace: 'pre-wrap', fontSize: '0.9em' }}>
                  {truncateContent(article.content)}
                </td>
                <td>{article.author}</td>
                <td>{article.date}</td>
                <td>{article.image ? <img src={article.image} alt="" style={{ width: 60, height: 40, objectFit: 'cover' }} /> : ''}</td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="edit-btn" 
                      onClick={() => handleEditArticle(article)}
                      disabled={loading.update || loading.delete}
                    >
                      <EditIcon />
                    </button>
                    <button 
                      className="delete-btn" 
                      onClick={() => { setArticleToDelete(article); setShowDeleteModal(true); }}
                      disabled={loading.update || loading.delete}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Article Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{editingArticle ? 'Edit Article' : 'Add Article'}</h2>
            <form onSubmit={editingArticle ? handleUpdateArticle : handleAddArticle}>
              <div className="form-group">
                <label>Title</label>
                <input 
                  type="text" 
                  value={formData.title} 
                  onChange={e => setFormData({ ...formData, title: e.target.value })} 
                  required 
                  disabled={loading.create || loading.update}
                />
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea
                  value={formData.content}
                  onChange={e => setFormData({ ...formData, content: e.target.value })}
                  required
                  rows={6}
                  style={{ width: '100%' }}
                  disabled={loading.create || loading.update}
                />
              </div>
              <div className="form-group">
                <label>Author</label>
                <input 
                  type="text" 
                  value={formData.author} 
                  onChange={e => setFormData({ ...formData, author: e.target.value })} 
                  required 
                  disabled={loading.create || loading.update}
                />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input 
                  type="date" 
                  value={formData.date} 
                  onChange={e => setFormData({ ...formData, date: e.target.value })} 
                  required 
                  disabled={loading.create || loading.update}
                />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input 
                  type="text" 
                  value={formData.image} 
                  onChange={e => setFormData({ ...formData, image: e.target.value })} 
                  disabled={loading.create || loading.update}
                />
              </div>
              <div className="modal-buttons">
                <button 
                  type="submit" 
                  className="save-btn"
                  disabled={loading.create || loading.update}
                >
                  {loading.create || loading.update ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    editingArticle ? 'Save Changes' : 'Add'
                  )}
                </button>
                <button 
                  type="button" 
                  className="cancel-btn" 
                  onClick={() => { setShowModal(false); setEditingArticle(null); setFormData(initialForm); }}
                  disabled={loading.create || loading.update}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete article <strong>{articleToDelete?.title}</strong>?</p>
            <div className="modal-buttons">
              <button 
                className="delete-confirm-btn" 
                onClick={handleDeleteArticle}
                disabled={loading.delete}
              >
                {loading.delete ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Delete'
                )}
              </button>
              <button 
                className="cancel-btn" 
                onClick={() => { setShowDeleteModal(false); setArticleToDelete(null); }}
                disabled={loading.delete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleManagement; 