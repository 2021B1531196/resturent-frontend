// Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div name="home" className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-heading">Experience Fine Dining</h2>
          <p className="hero-paragraph">
            Indulge in a culinary journey where every dish tells a story. Our expert chefs craft exceptional meals using the finest ingredients.
          </p>
          <div>
            <button className="hero-button">View Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
