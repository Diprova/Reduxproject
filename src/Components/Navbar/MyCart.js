import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";


const MyCart = ({ setCartVisibility }) => {

  return (
    <>
      <div className="cart" onClick={() => setCartVisibility(true)}>
        <AiOutlineShoppingCart size={40} className="cartIcon" />
        <h4>My Cart</h4></div>
    </>
  );
};
export default MyCart;