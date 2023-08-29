import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles/AdminLogin.module.css';

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      navigate('../admin/dashboard');
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className={styles.adminLoginContainer}>
      <form className={styles.adminLoginForm}>
        <h2>Login as Admin</h2>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>Login</button>
        <p>Don't have an account? <Link to="/user/signup">Sign Up</Link></p>
      </form>
    </div>
  );
}

export default AdminLogin;
