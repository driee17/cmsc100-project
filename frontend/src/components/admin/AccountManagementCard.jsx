import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const AccountManagementCard = () => {
    return (
        <div className="dashboard-card">
            <h2>Account Management</h2>
            <br />
            <p><strong>Accounts Count:</strong> 1234</p>
            <p><strong>Recent Sign-ups:</strong> John Doe, Jane Smith, Robert Brown</p>
            <Link to="/admin/account-management">Go to Account Management</Link>
        </div>
    );
};

export default AccountManagementCard;
