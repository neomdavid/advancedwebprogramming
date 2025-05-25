import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import "../styles/Navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setUserInfo(JSON.parse(user));
    } else {
      setUserInfo(null);
    }
  }, [pathname]); // Re-run when pathname changes to update after login

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserInfo(null);
    navigate("/login");
  };

  return (
    <nav className="">
      <div className="left-section">
        <div className="logo">
          <h1>
            N<span>D</span>
          </h1>
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Articles
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="right-section">
        {userInfo ? (
          <div className="user-info">
            <span className="user-name">{userInfo.firstName} ({userInfo.type})</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <Button>
              <p>Login</p>
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
