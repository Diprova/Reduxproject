import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import CartComponent from "./CartComponent";
import emptyCart from "../assets/empty-cart.webp";
import "./popupContents.css";

const Cartcontent = ({ cartVisibility, setCartVisibility, context }) => {
  const showHideClassName = cartVisibility
    ? "modal display-block"
    : "modal display-none";

  let subtotal = context.cart.reduce((n, { total }) => n + total + 49, 0);

  return (
    <div className={showHideClassName} onClick={() => setCartVisibility(false)}>
      <div className="cart-content container">
        <button className="cartcontent-button">
          My Cart
          <AiOutlineArrowRight onClick={() => setCartVisibility(false)}/>
        </button>

        {subtotal === 0 ? (
          <div className="no-content">
            <img src={emptyCart} alt="img" />
            <h6>No items in your cart</h6>
            <p>Your favourite items are just a click away</p>
          </div>
        ) : (
          <div>
            <div className="cart-total">
              <h3>
                Cart Total:{" "}
                {context.cart.reduce((n, { total }) => n + total, 0)}
              </h3>
              <p>Delivery Charges: ₹ 49</p>
              <div>Subtotal : {subtotal}</div>
            </div>
            <CartComponent context={context} />
          </div>
        )}
        {subtotal === 0 ? (
          <button
            className="shopping-button"
            onClick={() => setCartVisibility(false)}
          >
            Start Shopping
          </button>
        ) : (
          <button className="checkout-button">
            <p>Proceed to Checkout:</p>
            <p>{subtotal}</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Cartcontent;
