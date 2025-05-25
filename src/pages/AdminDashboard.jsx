import React, { useState, useEffect } from "react";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Form states
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "viewer",
    isActive: true
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setUsers(data.users);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error("Failed to create user");
      setShowAddModal(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        type: "viewer",
        isActive: true
      });
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/users/${editingUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error("Failed to update user");
      setEditingUser(null);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        type: "viewer",
        isActive: true
      });
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      if (!response.ok) throw new Error("Failed to delete user");
      fetchUsers(); // Refresh the list
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
      </div>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-info">
            <h3>Total Users</h3>
            <p>Loading...</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-newspaper"></i>
          </div>
          <div className="stat-info">
            <h3>Total Articles</h3>
            <p>Loading...</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-eye"></i>
          </div>
          <div className="stat-info">
            <h3>Total Views</h3>
            <p>Loading...</p>
          </div>
        </div>
      </div>

      <div className="dashboard-recent">
        <div className="recent-section">
          <h2>Recent Users</h2>
          <div className="recent-list">
            <p>Loading recent users...</p>
          </div>
        </div>
        
        <div className="recent-section">
          <h2>Recent Articles</h2>
          <div className="recent-list">
            <p>Loading recent articles...</p>
          </div>
        </div>
      </div>

      <div className="dashboard-header">
        <button className="add-user-btn" onClick={() => setShowAddModal(true)}>
          <i className="fas fa-plus"></i> Add New User
        </button>
      </div>

      <div className="users-table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName} {user.lastName}</td>
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
                          email: user.email,
                          type: user.type,
                          isActive: user.isActive
                        });
                      }}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      <i className="fas fa-trash"></i>
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
          <div className="modal-content">
            <h2>{editingUser ? 'Edit User' : 'Add New User'}</h2>
            <form onSubmit={editingUser ? handleEditUser : handleAddUser}>
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
                      firstName: "",
                      lastName: "",
                      email: "",
                      password: "",
                      type: "viewer",
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

export default AdminDashboard; 