import React, { useState, useEffect } from "react";
import "../styles/LoginPage.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { createUser } from "../api/userApi";
import { toast } from 'react-toastify';

const RegistrationPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    contactNumber: "",
    email: "",
    type: "viewer",
    username: "",
    password: "",
    address: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.showToast) {
      toast.success(location.state.message || `Welcome ${location.state.firstName}! Your account has been created successfully.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Validate first step
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.username) {
      toast.error("Please fill in all required fields", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    try {
      const { data } = await createUser(formData);
      
      // Navigate to login page with success message
      navigate("/login", { 
        state: { 
          showToast: true,
          firstName: data.firstName,
          message: "Registration successful! Please log in to continue."
        }
      });
    } catch (err) {
      toast.error(err.response?.data?.message || err.message || "Registration failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const renderStep1 = () => (
    <>
      <h2>Step 1: Basic Information</h2>
      <input
        type="text"
        name="firstName"
        required
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="input"
        autoComplete="given-name"
      />
      <input
        type="text"
        name="lastName"
        required
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="input"
        autoComplete="family-name"
      />
      <input
        type="text"
        name="username"
        required
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="input"
        autoComplete="username"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="input"
        autoComplete="email"
      />
      <button type="button" onClick={handleNext} className="login-button">
        Next
      </button>
    </>
  );

  const renderStep2 = () => (
    <>
      <h2>Step 2: Additional Information</h2>
      <input
        type="number"
        name="age"
        required
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        className="input"
      />
      <select
        name="gender"
        required
        value={formData.gender}
        onChange={handleChange}
        className="input"
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="tel"
        name="contactNumber"
        required
        placeholder="Contact Number"
        value={formData.contactNumber}
        onChange={handleChange}
        className="input"
        autoComplete="tel"
      />
      <input
        type="text"
        name="address"
        required
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="input"
        autoComplete="street-address"
      />
      <select
        name="type"
        required
        value={formData.type}
        onChange={handleChange}
        className="input"
      >
        <option value="viewer">Viewer</option>
        <option value="editor">Editor</option>
        <option value="admin">Admin</option>
      </select>
      <input
        type="password"
        name="password"
        required
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="input"
        autoComplete="new-password"
      />
      <input
        type="password"
        required
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="input"
        autoComplete="new-password"
      />
      <div className="button-group">
        <button type="button" onClick={() => setStep(1)} className="login-button secondary">
          Back
        </button>
        <button type="submit" className="login-button">
          Register
        </button>
      </div>
    </>
  );

  return (
    <form onSubmit={handleSubmit}>
      <main>
        <div className="card">
          <div className="card-bg">
            <p>ND</p>
          </div>
          <div className="card-bg-2">
            <p>ND</p>
          </div>
          <p>Please fill in your details</p>
          {step === 1 ? renderStep1() : renderStep2()}
          <p className="signup-text">
            Already have an account? <Link to={"/login"}>Log in</Link>
          </p>
        </div>
      </main>
    </form>
  );
};

export default RegistrationPage;
