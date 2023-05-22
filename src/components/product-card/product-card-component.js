import { useContext } from "react";
import Button from "../button/button.component";
import "./product-card-component.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { addItemsToCart } = useContext(CartContext);

  const addProductToCart = () => addItemsToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button type="button" onClick={addProductToCart} buttonType="inverted">
        Add to Cart
      </Button>
    </div>
  );
};
export default ProductCard;
