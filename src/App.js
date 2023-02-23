import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
// import "./categories.styles.scss"; for learning purpose initially

const Shop = () => {
  return <h1>Hi I am shop</h1>;
};

const App = () => {
  return (
    <Routes>
      {/* Here we are doing nesting and outlet in the Home page allows us to see our code
      based on the Routes */}
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
