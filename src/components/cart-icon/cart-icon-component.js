import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.js";

const CartIcon = () => {
  const { isCartOpen, totalCartCount, setIsCartOpen } = useContext(CartContext);

  const toggleOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{totalCartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
