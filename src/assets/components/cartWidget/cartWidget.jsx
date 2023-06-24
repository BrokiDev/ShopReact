import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const cartItems = 0; // Número hardcodeado

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="cart-notification">{cartItems}</span>
    </div>
  );
};

export default CartWidget;
