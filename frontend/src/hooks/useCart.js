import { useState } from 'react';

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (item) => {
        // Check if the item already exists in the cart
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.productID === item.productID);
        
        if (existingItemIndex >= 0) {
            // Update the quantity if the item already exists
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            // Add the item if it's not already in the cart
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const handleRemoveFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.productID !== itemId));
    };

    return { cartItems, handleAddToCart, handleRemoveFromCart };
}

export default useCart  ;

