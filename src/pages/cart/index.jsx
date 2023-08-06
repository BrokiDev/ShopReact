import React, { useContext } from "react";

import { CartContext } from "../../context/cart-context";

function Cart() {
  const { cart, onAddToCart, onDecreaseFromCart, onRemoveFromCart, total } =
    useContext(CartContext);

  return (
    <div className="cartContainer">
      <h2>Cart</h2>
      <div className="cardCartContainer">
        {cart.length === 0 && <h3>Cart is empty</h3>}
        {cart?.length > 0 &&
          cart.map((product) => (
            <div key={product.id} className="cart">
              <h3>{product.name}</h3>
              <img src={product.image} alt="Imagen Producto" />
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
          <button className="btnCheckout">Checkout</button>
        </div>
      )}
    </div>

    // <h2>Cart</h2>
  );
}

export default Cart;
