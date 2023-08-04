import React from "react";
import "../header/style.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="menu">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li className="menu-cart-container">
          <img
            className="menu-cart-image"
            src="https://cdn-icons-png.flaticon.com/512/665/665199.png"
            alt="cart"
          />
          <div className="menu-cart-count-container">
            <span className="menu-cart-count">{}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
