import React from "react";
import "../styles/HomePage.css";
import Button from "../components/Button";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Clothing Store</h1>
      <p>
        Discover the latest trends in fashion. From casual wear to evening
        outfits, we have it all. Explore our collection of high-quality,
        stylish, and sustainable clothes designed for every occasion.
      </p>

      <div className="home-image-container">
        <img src={product1} alt="Product 1" className="home-image" />
        <img src={product2} alt="Product 2" className="home-image" />
      </div>

      <p>
        Join our community of fashion lovers and experience clothes that make
        you feel confident and look amazing. Browse through our curated
        collections, and find your next favorite piece today!
      </p>

      <Button>Shop Now</Button>
    </div>
  );
};

export default HomePage;
