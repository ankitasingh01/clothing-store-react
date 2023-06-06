import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";
import {
  selectCartTotal,
  selectIsCartOpen,
} from "../../store/cart/cart.selector.js";

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const totalCartCount = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const toggleOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{totalCartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
