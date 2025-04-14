import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const ProductListingCard = () => {
    return (
        <div className="dashboard-card">
            <h2>Product Listing</h2>
            <br />
            <p><strong>Products Count:</strong> 567</p>
            <p><strong>Recently Added Products:</strong> Product A, Product B, Product C</p>
            <p><strong>Out of Stock:</strong> Product X, Product Y</p>
            {/* <Link to="/admin/product-listing">Go to Product Listing</Link> */}
        </div>
    );
};

export default ProductListingCard;
