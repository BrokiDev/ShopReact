import "./App.css";
import Header from "./components/header";
import { CartProvider } from "./context/cart-context";
import Router from "./navigation";

function App() {
  return (
    <div>
      <CartProvider>
        <Header logo="Shop" />
        <Router />
      </CartProvider>
    </div>
  );
}

export default App;
