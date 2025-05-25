import React, { useState } from "react";
import "../styles/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log("Registration submitted:", { name, email, password });
    navigate("/welcome", { state: { name } });
  };

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
          <h2>Register</h2>
          <input
            type="text"
            required
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
          <input
            type="password"
            required
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
          />
          {error && <p style={{ color: "red", marginTop: "4px" }}>{error}</p>}
          <button type="submit" className="login-button">
            Register
          </button>
          <p className="signup-text">
            Already have an account? <Link to={"/login"}>Log in</Link>
          </p>
        </div>
      </main>
    </form>
  );
};

export default RegistrationPage;
