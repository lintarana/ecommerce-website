import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import styles from './styles/AdminOrders.module.css';

function AdminOrders() {
  const [orders] = useState([]);

  

  return (
    <div className={styles.adminOrders}>
      <AdminHeader />
      <main className={styles.ordersMain}>
        <h2>Orders</h2>
        <div className={styles.ordersList}>
          {orders.map(order => (
            <div key={order.id} className={styles.orderCard}>
              <h3>Order #{order.id}</h3>
              <p>Customer: {order.customerName}</p>
              <p>Total Amount: ${order.totalAmount}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AdminOrders;
