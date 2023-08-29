import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Login.module.css';

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h2>Login</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className={styles.input} />
          </div>
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
      </div>
      <div className={styles.options}>
        <Link to="/user/signup" className={styles.option}>Sign Up</Link>
        <Link to="/admin/login" className={styles.option}>Login as Admin</Link>
      </div>
    </div>
  );
};

export default Login;
