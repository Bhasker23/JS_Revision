import React from "react";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";

import {
  addTocart,
  removeFromCart,
} from "../../../reduxFolder/Slice/cartSlice";

function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const curItem = cart.find((item) => item.id === product.id);
  const curQty = curItem ? curItem.quantity : 0;

  return (
    <div className="SingleProduct">
      <img className="productImg" src={product.images[0]} alt={product.title} />
      <div className="productInfo">
        <h3 className="productTitle">{product.title}</h3>
        <p className="productPrice">{product.price}</p>
      </div>
      <div className="cartInfo">
        <button
          className="button"
          onClick={() => dispatch(addTocart(product.id))}
        >
          +
        </button>
        <h4>{curQty}</h4>
        <button
          onClick={() => dispatch(removeFromCart(product.id))}
          className="button"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
