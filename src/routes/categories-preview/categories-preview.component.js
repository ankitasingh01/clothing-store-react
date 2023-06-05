import React, { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card-component";
import CategoryPreview from "../../components/category-preview/category-preview.component";
// import { CategoriesContext } from "../../contexts/categories.context";
import "./categories-preview.styles.scss";
import { selectCategoriesMap } from "../../store/categories/category.selector";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
