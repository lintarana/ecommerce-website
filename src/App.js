import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import Login from './components/Login';
import UserLogin from './components/UserLogin';
import AdminLogin from './components/AdminLogin';
import Signup from './components/Signup';
import AdminApp from './components/AdminApp';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [username, setUsername] = useState('');
  const handleLogout = () => {
    setUsername(''); 
  };

  

  return (
    <div className="app">
      <Router>
      <HeaderRoutes cartItems={cartItems} username={username} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/login" element={<UserLogin setUsernameCallback={setUsername} />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/products" element={<ProductList cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </Router>
    </div>
  );
}

function HeaderRoutes({ cartItems, username, onLogout }) {
  const location = useLocation();

  if (location.pathname.startsWith('/admin')) {
    return null; 
  }

  return (
    <>
      <Header cartItems={cartItems} username={username} onLogout={onLogout} />
      <Navigation />
    </>
  );
}

export default App;
