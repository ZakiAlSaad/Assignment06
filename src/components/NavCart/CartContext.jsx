import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  // NEW: State to manage which tab is visible (false = Products, true = Cart)
  const [showCartView, setShowCartView] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems((prevItems) => 
      prevItems.filter((item) => item.name !== productToRemove.name)
    );
  };

  // NEW: Clear cart globally (useful for checkout)
  const clearCart = () => {
    setCartItems([]);
  };

  // Added showCartView, setShowCartView, and clearCart to the provider
  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      clearCart,
      showCartView, 
      setShowCartView 
    }}>
      {children}
    </CartContext.Provider>
  );
};