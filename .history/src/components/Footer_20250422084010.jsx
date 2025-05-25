import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const currentPath = useLocation().pathname;
  console.log(currentPath);
  return (
    <footer>
      {currentPath !== "/login" || currentPath !== "/register" ? (
        <>
          {" "}
          <h1>Look Good. Feel Good. Do Good</h1>
          <div className="footer-item-container">
            <div className="footer-item">
              <h2>Connect</h2>
              <div className="social-links">
                <a href="#">
                  <FaInstagram /> Instagram
                </a>
                <a href="#">
                  <FaFacebookF /> Facebook
                </a>
                <a href="#">
                  <FaTwitter /> Twitter
                </a>
                <a href="#">
                  <FaYoutube /> YouTube
                </a>
              </div>
            </div>

            <div className="footer-item">
              <h2>Locations</h2>
              <p>Makati City</p>
              <p>Cebu City</p>
              <p>Davao City</p>
              <p>Baguio City</p>
            </div>

            <div className="footer-item">
              <h2>Customer Care</h2>
              <p>Contact Us</p>
              <p>FAQs</p>
              <p>Shipping Policy</p>
              <p>Returns & Exchanges</p>
            </div>

            <div className="footer-item">
              <h2>Company</h2>
              <p>About Us</p>
              <p>Sustainability</p>
              <p>Careers</p>
              <p>Press</p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} ND. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
