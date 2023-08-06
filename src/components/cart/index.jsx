import React, { useContext } from "react";
import "./styles.css";
import { CartContext } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, onAddToCart, onDecreaseFromCart, onRemoveFromCart, total } =
    useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate("/checkout");
  };

  console.log({ cart });
  return (
    <div className="cartContainer">
      <h2>Cart</h2>
      <div className="cardCartContainer">
        {cart.length === 0 && <h3 className="text-centered">Cart is empty</h3>}
        {cart?.length > 0 &&
          cart.map((product) => (
            <div key={product.id} className="cart">
              <h3>{product.name}</h3>
              <img src={product.image} alt="Imagen Producto" />
              <p>{product.description}</p>
              <p>Qty {product.quantity}</p>
              <p> {product.price} USD</p>
              <p>{product.stock}left</p>
              <div className="cardActions">
                <button
                  onClick={() => onAddToCart(product.id)}
                  className="btnAdd"
                >
                  +
                </button>
                <button
                  onClick={() => onDecreaseFromCart(product.id)}
                  className="btnDecrease"
                >
                  -
                </button>

                <button
                  onClick={() => onRemoveFromCart(product.id)}
                  className="btnRemove"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      </div>
      {cart?.length > 0 && (
        <div className="cartView">
          <p className="totalCart">
            Total: &nbsp;$
            {total}&nbsp;USD
          </p>
          <button onClick={goToCheckout} className="btnCheckout">
            Checkout
          </button>
        </div>
      )}
    </div>

    // <h2>Cart</h2>
  );
}

export default Cart;
