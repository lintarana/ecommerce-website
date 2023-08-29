import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCog } from 'react-icons/fa';
import styles from './styles/AdminHeader.module.css';

function AdminHeader() {
  return (
    <header className={styles.adminHeader}>
      <div className={styles.logo}>
        Admin Panel
      </div>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/admin/dashboard" className={styles.navLink}>Dashboard</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/admin/products" className={styles.navLink}>Products</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.profile}>
        <FaUserCog className={styles.profileIcon} />
        <span className={styles.profileText}>Admin</span>
      </div>
    </header>
  );
}

export default AdminHeader;
