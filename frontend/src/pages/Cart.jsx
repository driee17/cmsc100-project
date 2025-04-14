import React, { useState } from 'react';
import { NavHeader } from '../components';

function CartPage({ cartItems = [], handleCheckout }) {
    // Calculate total counts and prices
    const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <>
            <div className="body">
                <header>
                        <NavHeader />
                </header>

                <main className="cartPage">
                <h1>Your Cart</h1>

                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul className="cartItemsList">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.productID}
                                    item={item}
                                    handleRemoveFromCart={handleRemoveFromCart}
                                />
                            ))}
                        </ul>

                        <div className="cartSummary">
                            <p>Total Items: {totalItemCount}</p>
                            <p>Total Price: ${totalPrice.toFixed(2)}</p>
                            <button 
                                className="checkoutButton" 
                                onClick={handleCheckout}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
                </main>
            </div>
        </>
    );
}

function CartItem({ item, handleRemoveFromCart }) {
    const itemTotalPrice = item.price * item.quantity;

    return (
        <li className="cartItem">
            <img
                className="cartItemImage"
                src={item.imgurl}
                alt={item.productName}
            />
            <div className="cartItemInfo">
                <h3>{item.productName}</h3>
                <p>{item.productDesc}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${itemTotalPrice.toFixed(2)}</p>
                <button onClick={() => handleRemoveFromCart(item.productID)}>Remove</button>
            </div>
        </li>
    );
}


export default CartPage;
