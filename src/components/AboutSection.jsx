import React from 'react';
import './AboutSection.css';
// Aapko yahan images import karni hongi (ya demo URLs use karein)
import chefImg from '../assets/chef.jpg'; // Example image
import foodImg from '../assets/food.jpg'; // Example image

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Side: Creative Image Collage */}
        <div className="about-images">
          <div className="img-wrapper large">
            <img src={chefImg} alt="Chef preparing food" />
          </div>
          <div className="img-wrapper small">
            <img src={foodImg} alt="Delicious plating" />
          </div>
          {/* Floating Badge Card */}
          <div className="floating-badge">
            <div className="badge-icon">⭐</div>
            <div className="badge-text">
              <strong>5+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>
        </div>

        {/* Right Side: Engaging Text Content */}
        <div className="about-content">
          <h5 className="section-tagline">OUR STORY</h5>
          <h2 className="section-heading">Where Passion Meets Flavor in Every Bite.</h2>
          <p className="section-paragraph">
            Welcome to ZestyBites, where we believe every meal should be an unforgettable experience. Founded by food lovers for food lovers, our journey began with a simple mission: to bring restaurant-quality, gourmet flavors straight to your doorstep.
          </p>
          <p className="section-paragraph">
            We don't just cook; we craft culinary masterpieces using only the freshest, highest-quality ingredients. Our expert chefs infuse passion and precision into every dish, ensuring each bite is a celebration of taste and freshness.
          </p>

          {/* Key Highlights List */}
          <ul className="about-highlights">
            <li>
              <span className="highlight-icon">🚀</span>
              Fast & Hot Delivery to Your Doorstep
            </li>
            <li>
              <span className="highlight-icon">👨‍🍳</span>
              Master Chefs with Years of Expertise
            </li>
            <li>
              <span className="highlight-icon">🌱</span>
              Farm-Fresh Ingredients Daily
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;