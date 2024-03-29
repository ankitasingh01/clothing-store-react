import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { CategoriesContextProvider } from "./contexts/categories.context";
import { CartContextProvider } from "./contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesContextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
