import React, { useState } from 'react';
import { ShoppingCart, NavHeader, HomeCarousel, Sidebar, ItemList, SearchBar } from '../components';
import { useCart, useFilter, useSort, useSearch } from '../hooks';
import { data, categories } from '../TempData';

function Home() {
    const { handleAddToCart } = useCart();
    const [layout, setLayout] = useState('grid');

    // Custom hooks handle all logic
    const { searchQuery, searchedData, handleSearch } = useSearch(data);
    const { filters, filteredData, handleFilterChange } = useFilter(searchedData);
    const { sortBy, sortOrder, sortedData, handleSortChange } = useSort(filteredData);

    const toggleLayout = () => {
        setLayout((prevLayout) => (prevLayout === 'grid' ? 'list' : 'grid'));
    };

    return (
        <div className="body">
            <header>
                <NavHeader />
            </header>

            <main>
                <HomeCarousel data={data} />
                <div className="homeLayout">
                    <Sidebar
                        data={data}
                        categories={categories}
                        toggleLayout={toggleLayout}
                        layout={layout}
                        onSortChange={handleSortChange}
                        onFilterChange={handleFilterChange}
                    />
                    <div className='searchList'>
                        <SearchBar onSearch={handleSearch} />
                        <ItemList 
                            data={sortedData} 
                            handleAddToCart={handleAddToCart} 
                            layout={layout} 
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
