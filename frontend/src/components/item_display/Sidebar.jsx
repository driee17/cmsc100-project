import React, { useState } from 'react';
import './styles.css';
import { FaList, FaThLarge, FaSortAmountUp, FaSortAmountDown } from 'react-icons/fa';

function Sidebar({ toggleLayout, layout, onSortChange, categories, onFilterChange }) {
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');
    const [filters, setFilters] = useState([]);

    const handleSortChange = (e) => {
        const { value } = e.target;
        setSortBy(value);
        onSortChange(value, sortOrder);
    };

    const toggleSortOrder = (order) => {
        setSortOrder(order);
        onSortChange(sortBy, order);
    };

    const handleFilterChange = (e) => {
        const { value, checked } = e.target;
        let updatedFilters;
        if (checked) {
            updatedFilters = [...filters, value];
        } else {
            updatedFilters = filters.filter((item) => item !== value);
        }
        setFilters(updatedFilters);
        onFilterChange(updatedFilters);  // Pass the updated filters to the parent component
    };

    return (
        <div className="sidebar">
            <h3>Sort by</h3>
            <fieldset className="sort-options">
                <label>
                    <input
                        type="radio"
                        name="sortBy"
                        value="name"
                        checked={sortBy === 'name'}
                        onChange={handleSortChange}
                    />
                    Name
                </label>
                <label>
                    <input
                        type="radio"
                        name="sortBy"
                        value="type"
                        checked={sortBy === 'type'}
                        onChange={handleSortChange}
                    />
                    Type
                </label>
                <label>
                    <input
                        type="radio"
                        name="sortBy"
                        value="price"
                        checked={sortBy === 'price'}
                        onChange={handleSortChange}
                    />
                    Price
                </label>
                <label>
                    <input
                        type="radio"
                        name="sortBy"
                        value="quantity"
                        checked={sortBy === 'quantity'}
                        onChange={handleSortChange}
                    />
                    Quantity
                </label>
            </fieldset>

            <h3>Sort Order</h3>
            <div className="sort-order-toggle">
                <button 
                    className={`toggle-btn ${sortOrder === 'asc' ? 'active' : ''}`} 
                    onClick={() => toggleSortOrder('asc')}
                >
                    <FaSortAmountUp /> Ascending
                </button>
                <button 
                    className={`toggle-btn ${sortOrder === 'desc' ? 'active' : ''}`} 
                    onClick={() => toggleSortOrder('desc')}
                >
                    <FaSortAmountDown /> Descending
                </button>
            </div>

            <h3>Filter by Product Type</h3>
            <fieldset className="filter-options">
                {categories.map((category, index) => (
                    <div key={index} className="filter-option">
                        <input
                            type="checkbox"
                            name="productType"
                            value={category.productType}
                            onChange={handleFilterChange}
                        />
                        <label>{category.productType}</label>
                    </div>
                ))}
            </fieldset>

            <h3>View Options</h3>
            <div className="view-toggle">
                <button 
                    className={`toggle-btn ${layout === 'grid' ? 'active' : ''}`} 
                    onClick={toggleLayout}
                >
                    <FaThLarge /> Grid
                </button>
                <button 
                    className={`toggle-btn ${layout === 'list' ? 'active' : ''}`} 
                    onClick={toggleLayout}
                >
                    <FaList /> List
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
