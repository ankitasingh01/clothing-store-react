import React, { Fragment, useContext } from "react";
import ProductCard from "../../components/product-card/product-card-component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./shop.styles.scss";
const ShopComponent = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title] &&
              categoriesMap[title].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ShopComponent;
