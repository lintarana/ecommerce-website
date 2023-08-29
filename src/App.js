import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/products" element={<ProductList cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
