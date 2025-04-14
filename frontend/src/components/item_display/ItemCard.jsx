import React from 'react';

function ItemCard({ item, handleAddToCart }) {
    return (
        <div className="itemCard">
            <img
                className="itemCardImage"
                src={item.imgurl}
                alt={item.productName}
            />
            <div className="itemInfo">
                <h3>{item.productName}</h3>
                <p>{item.productDesc}</p>
                <h3>₱ {item.productPrice}</h3>
                <p>{item.productQuan} in stock</p>
            </div>
            <button
                className="addToCartBtn"
                onClick={() => handleAddToCart(item)}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ItemCard;
