import React, { useContext } from "react";
import "../header/style.css";
import { CartContext } from "../../context/cart-context";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart");
  };

  const goToCategories = () => {
    navigate("/categories");
  };
  return (
    <nav className="nav">
      <ul className="menu">
        <li>
          <Link to={"#"} href="#">
            About
          </Link>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <Link to={"/categories"} href="/categories">
            Categories
          </Link>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li onClick={goToCart} className="menu-cart-container">
          <img
            className="menu-cart-image"
            src="https://cdn-icons-png.flaticon.com/512/665/665199.png"
            alt="cart"
          />
          <div className="menu-cart-count-container">
            <span className="menu-cart-count">{cart.length}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
