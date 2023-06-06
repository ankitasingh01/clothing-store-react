import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import "./product-card-component.styles.scss";
import { addItemsToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { id, name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemsToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        type="button"
        onClick={addProductToCart}
        buttonType={BUTTON_TYPES_CLASSES.inverted}
      >
        Add to Cart
      </Button>
    </div>
  );
};
export default ProductCard;
