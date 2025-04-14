import React, {useState} from 'react';
import { NavHeader,  Sidebar, ItemList, AccountManagementCard, ProductListingCard, OrderFulfillmentCard, SalesReportCard } from '../components';
import { useCart, useFilter, useSort } from '../hooks';
import { data, categories } from '../TempData';


function AdminDashboard (){

    // MOVE LOGIC TO THEIR OWN FILES
    const { handleAddToCart } = useCart();
    const [layout, setLayout] = useState('grid');
    const [sortedData, setSortedData] = useState(data);

    // Using custom hooks for sorting and filtering
    const { sortBy, sortOrder, handleSortChange, toggleSortOrder } = useSort(data);
    const { filters, handleFilterChange } = useFilter(data);

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
        <>
        <div className="body">

            <header>
                <NavHeader />
            </header>

            <main>
                <h1>Dashboard</h1>
                <div className="admin-dashboard">
                    <SalesReportCard />
                    <ProductListingCard />
                    <OrderFulfillmentCard />
                    <AccountManagementCard />
                </div>
                <h1>All Products</h1>
                <div className="homeLayout">
                    <Sidebar
                        data={data}
                        categories={categories}
                        toggleLayout={toggleLayout}
                        layout={layout}
                        onSortChange={updateSortedData}
                        onFilterChange={updateFilteredData}
                    />
                    <ItemList data={sortedData} handleAddToCart={handleAddToCart} layout={layout} />
                </div>
            </main>

        </div>
        </>
    );
};

export default AdminDashboard;
