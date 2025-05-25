import React, { useState } from "react";
import "../styles/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = email.split("@")[0];
    console.log("Login submitted: ", { email, password });

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
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="signup-text">
            Don't have an account? <Link to={"/register"}>Sign up</Link>
          </p>
        </div>
      </main>
    </form>
  );
};

export default LoginPage;
