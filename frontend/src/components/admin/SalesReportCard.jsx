import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const SalesReportCard = () => {
    return (
        <div className="dashboard-card">
            <h2>Sales Report</h2>
            <br />
            <p><strong>Products Sold:</strong> 3456</p>
            <p><strong>Total Sales Income:</strong> $12,345.67</p>
            <Link to="/admin/sales-report">Go to Sales Report</Link>
        </div>
    );
};

export default SalesReportCard;
