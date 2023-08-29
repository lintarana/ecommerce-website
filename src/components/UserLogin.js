import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import styles from './styles/UserLogin.module.css';

const UserLogin = ({ setUsernameCallback }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://clothing-store.local/backend/api/users-login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setLoggedIn(true);
        setUsernameCallback(email);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h3>Login as a User</h3>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/user/signup">Sign Up</Link></p>
        <p>Login as Admin? <Link to="/admin/login">Login as Admin</Link></p>
      </form>
    </div>
  );
};

export default UserLogin;
