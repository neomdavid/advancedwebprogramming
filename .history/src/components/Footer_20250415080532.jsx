import React from "react";

const Footer = () => {
  return (
    <footer>
      <h1>Look Good. Feel Good. Do Good</h1>
      <div>
        {" "}
        <div className="footer-item">
          <h2>Connect</h2>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
        <div className="footer-item">
          <h2>Makati City</h2>
          <p>123 Fakedo St., Makati, Metro Manila</p>
        </div>
        <div className="footer-item">
          <h2>Cebu City</h2>
          <p>456 Madeup Ave., Cebu City, Cebu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
