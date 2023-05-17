import React, { useContext } from "react";
import ProductCard from "../../components/product-card/product-card-component";
import { ProductsContext } from "../../contexts/product.context";
import "./shop.styles.scss";
const ShopComponent = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ShopComponent;
