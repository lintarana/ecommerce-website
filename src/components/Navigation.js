// Navigation.js
import React from 'react';
import './Navigation.css'; // Import your CSS file for styling

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/checkout">Checkout</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
