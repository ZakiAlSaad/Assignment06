import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // NEW: Remove item
  const removeFromCart = (productToRemove) => {
    setCartItems((prevItems) => 
      prevItems.filter((item) => item.name !== productToRemove.name)
    );
  };

  // Make sure to add removeFromCart to the value object!
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};