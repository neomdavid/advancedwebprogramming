import React from "react";
import "../styles/AboutPage.css"; // Optional if you're styling separately

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Our Clothing Brand</h1>
      <p>
        Welcome to our fashion world! We are a clothing brand dedicated to
        providing high-quality, stylish, and comfortable garments that cater to
        every occasion. Our designs blend modern trends with timeless elegance,
        so you can always feel confident and look your best.
      </p>

      <img
        src="https://source.unsplash.com/800x400/?fashion,clothes"
        alt="Clothing collection"
        className="about-image"
      />

      <p>
        Whether you're looking for casual wear, office attire, or a special
        evening outfit, we've got something for everyone. Our commitment to
        sustainability ensures that each piece is made with care for both people
        and the planet. Join us in celebrating fashion that lasts.
      </p>
    </div>
  );
};

export default AboutPage;
