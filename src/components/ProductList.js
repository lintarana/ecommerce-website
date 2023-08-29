import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductList.css';

const ProductList = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://clothing-store.local/backend/api/products.php');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingCartItem = cartItems.find(item => item.id === product.id);

    if (existingCartItem) {
      const updatedCartItems = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={`http://clothing-store.local/backend/uploads/${product.image}`} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Rs.{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
