import { useState, useEffect } from 'react';

const useSearch = (initialData) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchedData, setSearchedData] = useState(initialData);

    useEffect(() => {
        if (!searchQuery) {
            setSearchedData(initialData);
        } else {
            const filtered = initialData.filter(item =>
                item.productName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchedData(filtered);
        }
    }, [searchQuery, initialData]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return {
        searchQuery,
        searchedData,
        handleSearch,
    };
};

export default useSearch;
