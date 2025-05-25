import React, { useState } from "react";
import "../styles/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = email.split("@")[0]; // simple dummy name from email
    console.log("Login submitted: ", { email, password });

    // Navigate to Welcome page and pass name
    navigate("/welcome", { state: { name } });
  };

  return (
    <main>
      <div className="card">
        <div className="card-bg">
          <p>ND</p>
        </div>
        <p>Please enter your details</p>
        <h2>Login</h2>
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
          Login
        </button>
        <p className="signup-text">
          Don't have an account? <Link to={"/register"}>Sign up</Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
