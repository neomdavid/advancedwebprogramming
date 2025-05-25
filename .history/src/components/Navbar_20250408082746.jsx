import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="">
      <div className="logo">
        <img alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
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
