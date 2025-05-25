import React from "react";
import { useLocation, Link } from "react-router-dom";

const WelcomePage = () => {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <main
      style={{
        height: "56.8vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        marginTop: "-1px",
      }}
    >
      <h1 style={{ fontSize: "5rem", marginBottom: ".5rem" }}>
        Welcome{name ? `, ${name}!` : "!"}
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "3rem" }}>
        We're glad to have you here.
      </p>
      <Link
        to="/"
        style={{
          padding: "12px 24px",
          fontSize: "1rem",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
          color: "#1c1c1c",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "all 0.3s ease",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#eaeaea";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#ffffff";
        }}
      >
        Proceed to Shop
      </Link>
    </main>
  );
};

export default WelcomePage;
