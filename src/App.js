import { categories } from "./constant";
import Directory from "./components/directory/directory-component";
// import "./categories.styles.scss"; for learning purpose initially

const App = () => {
  return <Directory categories={categories} />;
};

export default App;
