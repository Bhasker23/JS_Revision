import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cartReducer.cart);
  let count = 0;
  cart.forEach((element) => {
    count += element.quantity;
  });
  return (
    <nav>
      <h2 className="banner">My Myntra</h2>
      <div className="right-layout">
        <div className="cart-layout">
          <AiOutlineShoppingCart />
          <h4>{count}</h4>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
