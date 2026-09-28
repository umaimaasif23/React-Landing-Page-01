import React from 'react';
import './BrandsMarquee.css';

const brandLogos = [
  { id: 1, name: 'ZestyBites Fresh', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=200&auto=format&fit=crop', alt: 'Fresh' },
  { id: 2, name: 'Organic Foods', src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=200&auto=format&fit=crop', alt: 'Organic' },
  { id: 3, name: 'Burger Hub', src: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=200&auto=format&fit=crop', alt: 'Burger' },
  { id: 4, name: 'Fast Delivery', src: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=200&auto=format&fit=crop', alt: 'Delivery' },
  { id: 5, name: 'Chef Special', src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=200&auto=format&fit=crop', alt: 'Chef' },
  { id: 6, name: 'ZestyBites Fresh', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=200&auto=format&fit=crop', alt: 'Fresh' },
  { id: 7, name: 'Organic Foods', src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=200&auto=format&fit=crop', alt: 'Organic' },
  { id: 8, name: 'Burger Hub', src: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=200&auto=format&fit=crop', alt: 'Burger' },
];

const BrandsMarquee = () => {
  return (
    <div className="brands-marquee-section">
      <h5 className="marquee-title">Trusted By Food Partners & Brands</h5>
      <div className="marquee-container">
        <div className="marquee-track">
          {brandLogos.map((logo, index) => (
            <div key={index} className="brand-logo-item">
              <img src={logo.src} alt={logo.alt} />
              <span className="brand-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsMarquee;