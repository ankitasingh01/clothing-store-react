import React, { useEffect, createContext, useState } from "react";
import PRODUCTS from "../../src/shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  const contextValues = { products };
  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
};
