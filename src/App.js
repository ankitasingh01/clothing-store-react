import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import { UserProvider } from "./contexts/user.context";
import ShopComponent from "./routes/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";
// import "./categories.styles.scss"; for learning purpose initially

const App = () => {
  return (
    <Routes>
      {/* Here we are doing nesting and outlet in the Home page allows us to see our code
      based on the Routes */}
      {/* https://css-tricks.com/snippets/css/complete-guide-grid/ */}

      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<ShopComponent />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
