import React, { useState } from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted: ", { email, password });
  };
  return (
    <main className="">
      <div className="card">
        <p>Please enter your details</p>
        <h2>Login</h2>
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
          Login
        </button>
        <p>
          Don't have an account? <span>Sign up</span>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
