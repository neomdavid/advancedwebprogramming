import React, { useState } from "react";
import "../styles/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/userApi";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await loginUser({ email, password });
      // Store the token and user info in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({
        firstName: data.firstName,
        type: data.type,
        email: email
      }));
      // Redirect based on user type
      switch (data.type) {
        case "admin":
          navigate("/admin");
          break;
        case "editor":
          navigate("/admin");
          break;
        case "viewer":
          navigate("/", { state: { name: data.firstName } });
          break;
        default:
          navigate("/welcome", { state: { name: data.firstName } });
      }
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Login failed"
      );
    }
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
          {error && <p className="error-message">{error}</p>}
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
