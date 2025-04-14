import React from 'react';

function ShoppingCart({ cartItems, handleRemoveFromCart }) {
    const totalItems = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="shoppingCart">
            <h2>Shopping Cart (Total: {totalItems})</h2>
            <div className="cartItemsGroup">
                {Object.values(cartItems).map((item) => (
                    <div key={item.id} className="cartItem">
                        <span>{item.name}</span>
                        <span>Quantity: {item.quantity}</span>
                        <button
                            className="deleteBtn"
                            onClick={() => handleRemoveFromCart(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShoppingCart;
