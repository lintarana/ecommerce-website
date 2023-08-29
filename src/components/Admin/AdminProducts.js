import React, { useState, useEffect } from 'react';
import styles from './styles/AdminProducts.module.css';

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(); 
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://clothing-store.local/backend/api/products.php');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleEdit = (productId) => {
  };

  const handleRemove = async (productId) => {
    try {
      const response = await fetch(`http://clothing-store.local/backend/api/products.php?id=${productId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchProducts();
      }
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className={styles.adminProducts}>
      <h2>Admin Products</h2>
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button onClick={() => handleEdit(product.id)}>Edit</button>
                <button onClick={() => handleRemove(product.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;
