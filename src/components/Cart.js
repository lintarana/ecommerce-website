
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Cart.css';

const Cart = ({ cartItems, setCartItems }) => {
  const [quantities, setQuantities] = useState({});

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * (quantities[item.id] || 0);
    }
    return total;
  };

  const increaseQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max(0, (prevQuantities[itemId] || 0) - 1),
    }));
  };

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={`http://clothing-store.local/backend/uploads/${item.image}`} alt={item.name} />
                  <div className="item-details">
                    <p>{item.name}</p>
                    <p>Price: Rs.{item.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span>{quantities[item.id] || 0}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="total-price">
              Total Price: Rs.{calculateTotalPrice().toFixed(2)}
            </div>
           
            <Link to="/checkout" className="checkout-button">
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
