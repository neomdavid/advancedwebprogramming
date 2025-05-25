import React from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <main className="">
      <div className="card">
        <p>Please enter your details</p>
        <h2>Login</h2>
        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <button className="login-button">Login</button>
      </div>
    </main>
  );
};

export default LoginPage;
