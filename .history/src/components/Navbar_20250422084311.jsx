import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "./Button";
import "../styles/Navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();

  // Logic to determine which button to show
  const showLogin = pathname === "/register";
  const showRegister = pathname === "/login";

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

      {/* Conditionally render the login/register button */}
      {showLogin && (
        <Link to="/login">
          <Button>
            <p>Login</p>
          </Button>
        </Link>
      )}
      {showRegister && (
        <Link to="/register">
          <Button>
            <p>Register</p>
          </Button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
