import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./checkout-item.styles.scss";
import {
  addItemsToCart,
  clearItemsFromCart,
  removeItemsFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { imageUrl, name, price, quantity } = cartItem;

  const clearItemHandler = () =>
    dispatch(clearItemsFromCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemsFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemsToCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
};
export default CheckoutItem;
