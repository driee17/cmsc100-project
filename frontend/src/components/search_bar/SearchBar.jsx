import React from 'react';
import './styles.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ placeholder = "Search...", onSearch }) {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                className="search-input" 
                placeholder={placeholder} 
                onChange={(e) => onSearch(e.target.value)} 
            />
            <button className="search-button">
                <FaSearch />
            </button>
        </div>
    );
}

export default SearchBar;
