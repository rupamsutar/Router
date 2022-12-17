import { Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Mainheader from "./Components/Mainheader";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <header>
        <Mainheader />
      </header>
        <main>
        <Route path="/Welcome">
          <Welcome />
        </Route>
        <Route path="/Products">
          <Products />
        </Route>
        <Route path="/product-details/:productId">
          <ProductDetails />
        </Route>
      </main>
    </div>
  );
}

export default App;
