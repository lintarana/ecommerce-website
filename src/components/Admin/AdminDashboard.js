import React from 'react';
import styles from './styles/AdminDashboard.module.css';

function AdminDashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <h2>Admin Dashboard</h2>
      <div className={styles.adminSection}>
        <div className={styles.adminCard}>
          <h3>Manage Products</h3>
          <p>Add, edit, or remove products from the store.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
