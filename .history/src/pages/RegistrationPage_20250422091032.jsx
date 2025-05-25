import React, { useState } from "react";
import "../styles/LoginPage.css"; // same CSS as LoginPage
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", { name, email, password });

    navigate("/welcome", { state: { name } });
  };

  return (
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
        <button onClick={handleSubmit} className="login-button">
          Register
        </button>
        <p className="signup-text">
          Already have an account? <Link to={"/login"}>Log in</Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
