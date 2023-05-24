import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, totalCartCount, setIsCartOpen } = useContext(CartContext);

  const toggleOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalCartCount}</span>
    </div>
  );
};

export default CartIcon;