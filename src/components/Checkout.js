// Checkout.js
import React from 'react';
import './Checkout.css'; // Import your CSS file for styling

const Checkout = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <ul className="checkout-list">
        {cartItems.map(item => (
          <li key={item.id} className="checkout-item">
            <p>{item.name}</p>
            <p>Price: {item.price}</p>
          </li>
        ))}
      </ul>
      <p>Total: {calculateTotal()}</p>
      <button>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
