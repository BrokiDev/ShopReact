import React, { useContext } from "react";
import "./styles.css";
import { CartContext } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/cart/item";
import Total from "../../components/cart/total";
import { firebaseServices } from "../../services/firebase";

function Cart() {
  const { cart, onAddToCart, onDecreaseFromCart, onRemoveFromCart, total } =
    useContext(CartContext);
  const navigate = useNavigate();

  const onHandleCreateCart = async () => {
    const newCart = {
      buyer: {
        id: 1,
      },
      createAt: new Date(),
      total: total,
      status: "pending",
    };
    const cartId = await firebaseServices.createCart(newCart);
    return cartId;
  };

  const goToCheckout = async () => {
    const cartId = await onHandleCreateCart();
    navigate("/checkout", { state: { cartId } });
  };

  return (
    <div className="cartContainer">
      <h2>Cart</h2>
      <div className="cardCartContainer">
        {cart.length === 0 && <h3 className="text-centered">Cart is empty</h3>}
        {cart?.length > 0 &&
          cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              onAddToCart={onAddToCart}
              onDecreaseFromCart={onDecreaseFromCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))}
      </div>
      {cart?.length > 0 && <Total total={total} goToCheckout={goToCheckout} />}
    </div>
  );
}

export default Cart;
