import React, { useState, useEffect } from 'react';
import '../styles/UserManagement.css';
import { fetchUsers, createUser, updateUser, deleteUser } from '../api/userApi';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    address: '',
    contactNumber: '',
    gender: '',
    age: '',
    type: 'viewer',
    isActive: true
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const { data } = await fetchUsers();
      setUsers(data.users);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData);
      setShowAddModal(false);
      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        address: '',
        contactNumber: '',
        gender: '',
        age: '',
        type: 'viewer',
        isActive: true
      });
      loadUsers();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create user');
    }
  };

  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      await updateUser(editingUser._id, formData);
      setEditingUser(null);
      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        address: '',
        contactNumber: '',
        gender: '',
        age: '',
        type: 'viewer',
        isActive: true
      });
      loadUsers();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update user');
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await deleteUser(userId);
      loadUsers();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete user');
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="user-management">
      <div className="page-header">
        <h1>User Management</h1>
        <button className="add-user-btn" onClick={() => setShowAddModal(true)}>
          <i className="fas fa-plus"></i> Add New User
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge ${user.type}`}>
                    {user.type}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${user.isActive ? 'active' : 'inactive'}`}>
                    {user.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="edit-btn"
                      onClick={() => {
                        setEditingUser(user);
                        setFormData({
                          firstName: user.firstName,
                          lastName: user.lastName,
                          username: user.username,
                          email: user.email,
                          password: '',
                          address: user.address,
                          contactNumber: user.contactNumber,
                          gender: user.gender,
                          age: user.age,
                          type: user.type,
                          isActive: user.isActive
                        });
                      }}
                    >
                      <EditIcon />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteUser(user._id)}
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

      {/* Add/Edit User Modal */}
      {(showAddModal || editingUser) && (
        <div className="modal-overlay">
          <div className="modal-content two-column-modal">
            <h2>{editingUser ? 'Edit User' : 'Add New User'}</h2>
            <form onSubmit={editingUser ? handleEditUser : handleAddUser} className="two-column-form">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              {!editingUser && (
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                </div>
              )}
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option value="viewer">Viewer</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  value={formData.isActive}
                  onChange={(e) => setFormData({...formData, isActive: e.target.value === 'true'})}
                >
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </div>
              <div className="modal-buttons">
                <button type="submit" className="save-btn">
                  {editingUser ? 'Save Changes' : 'Add User'}
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingUser(null);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      username: '',
                      email: '',
                      password: '',
                      address: '',
                      contactNumber: '',
                      gender: '',
                      age: '',
                      type: 'viewer',
                      isActive: true
                    });
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement; 