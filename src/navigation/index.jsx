import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ProductDetail from "../pages/product-detail";
import Cart from ".././pages/cart";
import Categories from "../pages/categories";
import Checkout from "../pages/checkout";
import SuccesOrder from "../pages/success-order";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="*"
        element={
          <h1>
            Not Found Go to <a href="/">Home</a>
          </h1>
        }
      />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success-order" element={<SuccesOrder />} />
    </Routes>
  );
}

export default Router;
