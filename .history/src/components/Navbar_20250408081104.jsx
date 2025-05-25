import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img alt="logo" />
      </div>
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
      <Button></Button>
    </nav>
  );
};

export default Navbar;
