import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FiUser, FiX } from 'react-icons/fi';
import styles from './styles/Header.module.css';

const Header = ({ cartItems, username, onLogout }) => {
  const totalCartItems = cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.currencyLanguage}>
          <select className={styles.currencySelect}>
            <option value="pkr">PKR</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
          </select>
          <select className={styles.languageSelect}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>
      <div className={styles.centerText}>
        inta's Store
      </div>
      <div className={styles.rightSection}>
        <Link to="/cart" className={styles.cartIcon}>
          <FaShoppingCart />
          {totalCartItems > 0 && <span className={styles.cartCount}>{totalCartItems}</span>}
        </Link>

        {username ? (
          <div className={styles.navLink}>
            <FiUser className={styles.usernameIcon} />
            <span className={styles.usernameText}>
              Hello, {username}
              <button className={styles.logoutButton} onClick={onLogout}>
                <FiX className={styles.logoutIcon} /> 
              </button>
            </span>
          </div>
        ) : (
          <Link to="/user/login" className={styles.navLink}>
            <FiUser className={styles.usernameIcon} />
            <span className={styles.usernameText}>Login / Sign up</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
