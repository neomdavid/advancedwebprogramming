import React, { useState } from "react";
import "../styles/LoginPage.css";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register submitted: ", { name, email, password });
  };

  return (
    <main>
      <div className="card">
        <p>Please fill out the form below</p>
        <h2>Register</h2>
        <input
          type="text"
          id="name"
          required
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="email"
          id="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          id="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button onClick={handleSubmit} className="login-button">
          Register
        </button>
        <p className="signup-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default RegistrationPage;
