// Header.js
import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Clothing Store</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
        <a href="/checkout">Checkout</a>
      </nav>
    </header>
  );
};

export default Header;
