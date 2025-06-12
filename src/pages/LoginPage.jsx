import React, { useState, useEffect } from "react";
import "../styles/LoginPage.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../api/userApi";
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  useEffect(() => {
    if (location.state?.showToast) {
      toast.success(location.state.message || `Welcome back, ${location.state.firstName}!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login attempt started");

    try {
      console.log("Calling loginUser API with:", { email, password });
      const { data } = await loginUser({ email, password });
      console.log("Login API response:", data);

      // Use the login function from AuthContext
      login({
        firstName: data.firstName,
        type: data.type,
        email: email
      }, data.token);

      // Navigate based on user type
      switch (data.type) {
        case "admin":
        case "editor":
          console.log("Redirecting to admin dashboard");
          navigate("/admin", { 
            state: { 
              showToast: true,
              firstName: data.firstName,
              message: `Welcome back, ${data.firstName}! You are logged in as ${data.type}.`
            }
          });
          break;
        case "viewer":
          console.log("Redirecting to home page");
          navigate("/", { 
            state: { 
              showToast: true,
              firstName: data.firstName,
              message: `Welcome back, ${data.firstName}!`
            }
          });
          break;
        default:
          console.log("Redirecting to welcome page");
          navigate("/welcome", { 
            state: { 
              showToast: true,
              firstName: data.firstName,
              message: `Welcome back, ${data.firstName}!`
            }
          });
      }
    } catch (err) {
      console.error("Login error:", err);
      console.log("Attempting to show error toast");
      toast.error(err.response?.data?.message || err.message || "Login failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log("Error toast should be shown");
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
            autoComplete="email"
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            autoComplete="current-password"
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
