import { useState, useEffect } from 'react';

const useFilter = (initialData) => {
    const [filters, setFilters] = useState([]);
    const [filteredData, setFilteredData] = useState(initialData);

    useEffect(() => {
        if (filters.length === 0) {
            setFilteredData(initialData);
        } else {
            const filtered = initialData.filter((item) => filters.includes(item.productType));
            setFilteredData(filtered);
        }
    }, [filters, initialData]);

    const handleFilterChange = (selectedFilters) => {
        setFilters(selectedFilters);
    };

    return {
        filters,
        filteredData,
        handleFilterChange,
    };
};

export default useFilter;
