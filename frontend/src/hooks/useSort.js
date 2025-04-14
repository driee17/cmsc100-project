import { useState, useEffect } from 'react';

const useSort = (initialData) => {
    const [sortBy, setSortBy] = useState('name'); // Default sorting by name
    const [sortOrder, setSortOrder] = useState('asc'); // Default to ascending order
    const [sortedData, setSortedData] = useState(initialData);

    useEffect(() => {
        const sorted = [...initialData];
        sorted.sort((a, b) => {
            if (sortBy === 'name') {
                return sortOrder === 'asc' 
                    ? a.productName.localeCompare(b.productName) 
                    : b.productName.localeCompare(a.productName);
            }
            if (sortBy === 'price') {
                return sortOrder === 'asc' 
                    ? a.price - b.price 
                    : b.price - a.price;
            }
            if (sortBy === 'quantity') {
                return sortOrder === 'asc' 
                    ? a.productQuan - b.productQuan 
                    : b.productQuan - a.productQuan;
            }
            if (sortBy === 'type') {
                return sortOrder === 'asc' 
                    ? a.productType.localeCompare(b.productType) 
                    : b.productType.localeCompare(a.productType);
            }
            return 0;
        });
        setSortedData(sorted);
    }, [sortBy, sortOrder, initialData]);

    const handleSortChange = (newSortBy) => {
        if (sortBy === newSortBy) {
            setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortBy(newSortBy);
            setSortOrder('asc');
        }
    };

    return {
        sortBy,
        sortOrder,
        sortedData,
        handleSortChange,
    };
};

export default useSort;
