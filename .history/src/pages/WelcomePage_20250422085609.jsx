import React from "react";
import { useLocation } from "react-router-dom";

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
      }}
    >
      <h1 style={{ fontSize: "4.5rem", marginBottom: ".5rem" }}>
        Welcome{name ? `, ${name}!` : "!"}
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
        We're glad to have you here.
      </p>
      <button
        style={{
          padding: "10px 16px",
        }}
      >
        Proceed to Shop
      </button>
    </main>
  );
};

export default WelcomePage;
