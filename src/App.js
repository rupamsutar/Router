import { Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/products/:productId">
              <ProductDetails />
            </Route>
          </Switch>          
      </main>
    </div>
  );
}

export default App;
