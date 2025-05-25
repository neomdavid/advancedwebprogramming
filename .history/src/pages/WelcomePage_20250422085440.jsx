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
      <h1 style={{ fontSize: "3rem", marginBottom: ".3remrem" }}>
        Welcome{name ? `, ${name}!` : "!"}
      </h1>
      <p style={{ fontSize: "1.2rem" }}>We're glad to have you here.</p>
    </main>
  );
};

export default WelcomePage;
