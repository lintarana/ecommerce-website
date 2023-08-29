import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaListAlt } from 'react-icons/fa';
import styles from './styles/AdminSidebar.module.css';

function AdminSidebar() {
  return (
    <div className={styles.adminSidebar}>
      <nav>
        <ul>
          <li>
            <Link to="/admin/dashboard" className={styles.navLink}>
              <FaListAlt className={styles.icon} />
              Orders
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className={styles.navLink}>
              <FaShoppingCart className={styles.icon} />
              Products
            </Link>
          </li>
          <li>
            <Link to="/admin/customers" className={styles.navLink}>
              <FaUser className={styles.icon} />
              Customers
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminSidebar;
