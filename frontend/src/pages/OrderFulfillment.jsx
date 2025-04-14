import React, { useState } from 'react';
import { NavHeader, Sidebar, ItemList, SearchBar } from '../components';
import { useCart, useFilter, useSort } from '../hooks';
import useSearch from '../hooks/useSearch';
import { data, categories } from '../TempData';

function OrderFulfillment() {
    const { handleAddToCart } = useCart();
    const [layout, setLayout] = useState('grid');
    const [sortedData, setSortedData] = useState(data);

    // Using custom hooks for sorting and filtering
    const { sortBy, sortOrder, handleSortChange, toggleSortOrder } = useSort(data);
    const { filters, handleFilterChange } = useFilter(data);
    const { filteredData, handleSearch } = useSearch(data);

    const toggleLayout = () => {
        setLayout((prevLayout) => (prevLayout === 'grid' ? 'list' : 'grid'));
    };

    const updateSortedData = (newSortBy, newSortOrder) => {
        const sortedItems = handleSortChange(newSortBy, newSortOrder);
        setSortedData(sortedItems);
    };

    const updateFilteredData = (selectedFilters) => {
        const filteredItems = handleFilterChange(selectedFilters);
        setSortedData(filteredItems);
    };

    return (
        <div className="body">
            <header>
                <NavHeader />
            </header>
            <main>
                <h1>Order Fulfillment</h1>
                <SearchBar onSearch={handleSearch} />
                <div className="homeLayout">
                    <Sidebar
                        data={data}
                        categories={categories}
                        toggleLayout={toggleLayout}
                        layout={layout}
                        onSortChange={updateSortedData}
                        onFilterChange={updateFilteredData}
                    />
                    <ItemList data={filteredData} handleAddToCart={handleAddToCart} layout={layout} />
                </div>
            </main>
        </div>
    );
}

export default OrderFulfillment;
