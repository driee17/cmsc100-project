import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({ data, handleAddToCart, layout }) => {
    return (
        <div className={`itemCardsGroup ${layout}`}>
            {data.map((item) => (
                <ItemCard key={item.productID} item={item} handleAddToCart={handleAddToCart} />
            ))}
        </div>
    );
};

export default ItemList;
