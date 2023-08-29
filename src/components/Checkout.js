import React from 'react';
import './styles/Checkout.css';
import { Link } from 'react-router-dom';

const Checkout = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemQuantity = item.quantity || 1; // Default to 1 if quantity is undefined
      return total + item.price * itemQuantity;
    }, 0);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <ul className="checkout-list">
        {cartItems.map(item => (
          <li key={item.id} className="checkout-item">
            <p>{item.name}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity || 1}</p> {/* Display the quantity */}
          </li>
        ))}
      </ul>
      <p>Total: {calculateTotal()}</p>
      <Link to="/login"><button>Proceed to Payment</button></Link>
    </div>
  );
};

export default Checkout;
