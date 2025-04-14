import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const OrderFulfillmentCard = () => {
    return (
        <div className="dashboard-card">
            <h2>Order Fulfillment</h2>
            <br />
            <p><strong>Orders to Confirm:</strong> 35</p>
            <p><strong>Recent Orders:</strong></p>
            <ul>
                <li>Order #123 <button>More Details</button></li>
                <li>Order #124 <button>More Details</button></li>
                <li>Order #125 <button>More Details</button></li>
            </ul>
            <Link to="/admin/order-fulfillment">Go to Order Fulfillment</Link>
        </div>
    );
};

export default OrderFulfillmentCard;
