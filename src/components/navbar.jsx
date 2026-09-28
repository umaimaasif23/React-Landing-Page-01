import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="zesty-navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-icon">🍔</span> Zesty<span>Bites</span>
        </div>

        {/* Desktop Menu Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#menu" onClick={() => setIsOpen(false)}>Menu</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
          <li><a href="#offers" onClick={() => setIsOpen(false)}>Special Offers</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          {/* Mobile mein Order Now button menu ke andar dikhega */}
          <div className="mobile-order-btn">
            <a href="#order" className="order-btn">Order Now</a>
          </div>
        </ul>

        {/* Desktop Action Button */}
        <div className="nav-btn-container">
          <a href="#order" className="order-btn">Order Now</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;