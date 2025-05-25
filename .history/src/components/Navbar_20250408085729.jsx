import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import "../styles/Navbar.css";
const Navbar = () => {
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
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Articles
            </NavLink>
          </li>
        </ul>
      </div>

      <Button>
        <p>Login</p>
      </Button>
    </nav>
  );
};

export default Navbar;
