
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import styles from './styles/Navigation.module.css';
import { Link as ScrollLink } from 'react-scroll';


const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li>
          <ScrollLink to="aboutUs" smooth={true} duration={500} className={styles.navLink}>
            About Us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contactUs" smooth={true} duration={500} className={styles.navLink}>
            Contact Us
          </ScrollLink>
        </li>
        <li>
          <Link to="/products" className={styles.navLink}>Products</Link>
        </li>
        <li>
          <Link to="/cart" className={styles.navLink}>Cart</Link>
        </li>
        
        <li>
          <Link to="/blog" className={styles.navLink}>Blog</Link>
        </li>
      </ul>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
        <button className={styles.searchButton}><FaSearch /></button>
      </div>
    </nav>
  );
};

export default Navigation;
