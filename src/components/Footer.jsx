import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Column 1: Brand Info */}
        <div className="footer-col brand-col">
          <h2 className="footer-logo">Zesty<span>Bites</span>.</h2>
          <p className="footer-desc">
            Bringing restaurant-quality, gourmet flavors straight to your doorstep. Fast delivery, fresh ingredients, and unforgettable taste.
          </p>
          <div className="social-icons">
            <a href="#facebook" aria-label="Facebook">🌐</a>
            <a href="#instagram" aria-label="Instagram">📸</a>
            <a href="#twitter" aria-label="Twitter">🐦</a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Our Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#offer">Special Offers</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Top Categories */}
        <div className="footer-col">
          <h3>Top Categories</h3>
          <ul className="footer-links">
            <li><a href="#menu">Crispy Burgers</a></li>
            <li><a href="#menu">Supreme Pizzas</a></li>
            <li><a href="#menu">Loaded Fries</a></li>
            <li><a href="#menu">Signature Shakes</a></li>
            <li><a href="#menu">Midnight Combos</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter Subscription */}
        <div className="footer-col newsletter-col">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter to get exclusive discounts and new menu updates.</p>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Join</button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ZestyBites. All rights reserved. Crafted with passion.</p>
      </div>
    </footer>
  );
};

export default Footer;