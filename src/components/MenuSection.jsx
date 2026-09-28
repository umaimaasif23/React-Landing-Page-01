import React from 'react';
import './MenuSection.css';

// Total 6 food items ki array
const menuItems = [
  {
    id: 1,
    name: 'Zesty Double Burger',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Supreme Cheese Pizza',
    price: '$15.49',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Crispy Fried Chicken',
    price: '$10.99',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Spicy Pepperoni Pizza',
    price: '$14.99',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Loaded French Fries',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Classic Berry Shake',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop',
  },
];

const MenuSection = () => {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-container">
        <h2 className="menu-heading">Our Special Menu</h2>
        
        {/* 6 Cards Grid Layout */}
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-img-box">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <span className="menu-price">{item.price}</span>
                <button className="menu-order-btn">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;