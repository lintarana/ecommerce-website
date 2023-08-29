import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminHeader from './Admin/AdminHeader';
import AdminSidebar from './Admin/AdminSidebar';
import AdminDashboard from './Admin/AdminDashboard';
import AdminProducts from './Admin/AdminProducts';
import AdminOrders from './Admin/AdminOrders';
import AdminUsers from './Admin/AdminUsers';
import './AdminApp.css';

function AdminApp() {
  return (
    <div className="admin-app">
      <AdminHeader />
      <div className="admin-content">
        <AdminSidebar />
        <div className="admin-main">
          <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/products" element={<AdminProducts />} />
            <Route path="/orders" element={<AdminOrders />} />
            <Route path="/customers" element={<AdminUsers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminApp;
