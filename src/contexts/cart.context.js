import React, { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //end of another method
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  totalCartCount: 0,
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartCount, setTotalCartCount] = useState(0);

  const handleTotalQuantity = () => {
    const quant = cartItems.reduce((total, item) => total + item.quantity, 0);
    setTotalCartCount(quant);
  };

  useEffect(() => {
    handleTotalQuantity();
  }, [cartItems]);

  const addItemsToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const contextValues = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    totalCartCount,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
