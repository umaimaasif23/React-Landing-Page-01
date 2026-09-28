import React, { useState, useEffect } from 'react';
import './SpecialOffer.css';
import comboImage from '../assets/midnight.jpg'; // Aapko apni image lagani hogi

const SpecialOffer = () => {
  // Countdown Timer Logic (Filhaal 2 ghante ka demo timer)
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); 

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="special-offer-section" id="offer">
      <div className="offer-container">
        {/* Left Side: Visual & Timer */}
        <div className="offer-visual">
          <div className="offer-badge">
            <span className="fire-icon">🔥</span> LIMITED TIME DEAL
          </div>
          <img 
            src={comboImage}
            alt="Midnight Craving Combo" 
            className="offer-image" 
          />
          <div className="countdown-timer">
            <span>Offer Expires In:</span>
            <strong>{formatTime(timeLeft)}</strong>
          </div>
        </div>

        {/* Right Side: Text & Pricing */}
        <div className="offer-content">
          <h5 className="offer-subtitle">SAVE 35% TODAY</h5>
          <h2 className="offer-heading">The Ultimate Midnight Craving Combo</h2>
          <p className="offer-description">
            Double juicy cheese burgers, large loaded fries, and a chilled signature beverage — crafted to satisfy your late-night hunger at an unbeatable price.
          </p>
          <div className="price-display">
            <span className="old-price">$29.99</span>
            <span className="new-price">$18.99</span>
            <span className="price-tag">ONLY</span>
          </div>
          <button className="claim-btn" onClick={() => alert('Offer Claimed! Check your cart.')}>
            Claim Offer Now
          </button>
          <p className="offer-fine-print">*Conditions apply. Valid for online orders only.</p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;