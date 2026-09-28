import React from 'react';
import './HeroSection.css';
// Aapko yahan apni food image import karni hogi, misal ke tor par:
import heroImg from '../assets/burger.jpg'; 

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Left Side: Text Content */}
        <div className="hero-text">
          <h1>Ignite Your Taste Buds<span> with Every Single Bite </span></h1>
          <p>Indulge in the bold flavors of ZestyBites. Fresh ingredients, juicy burgers, and unbeatable taste, delivered fast to your door.</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn-primary">Explore Our Menu</a>
            <a href="#order" className="btn-secondary">Order Now</a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hero-image">
          {/* Aap yahan apni HD image ka source laga sakti hain */}
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop" alt="Delicious ZestyBites Burger" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;