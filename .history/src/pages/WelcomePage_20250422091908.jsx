import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/WelcomePage.css"; // Make sure to link to your CSS file for styles

const WelcomePage = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <main className="welcome-container">
      <h1 className="welcome-header">Welcome{name ? `, ${name}!` : "!"}</h1>
      <p className="welcome-subtext">We're glad to have you here.</p>
      <Link to="/" className="shop-button">
        Proceed to Shop
      </Link>
    </main>
  );
};

export default WelcomePage;
