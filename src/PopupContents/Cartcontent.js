import React, { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import CartComponent from "./CartComponent";
import emptyCart from "../assets/empty-cart.webp";
import { useHistory } from "react-router-dom";
import "./popupContents.css";
import { connect } from "react-redux";

const Cartcontent = ({ cartVisibility, setCartVisibility, cart }) => {
  const showHideClassName = cartVisibility
    ? "modal display-block"
    : "modal display-none";
  let subtotal = cart.reduce((n, { total }) => n + total + 49, 0);

  let history = useHistory();

  return (
    <div className={showHideClassName} onClick={() => setCartVisibility(false)}>
      <div className="cart-content container">
        <button className="cartcontent-button">
          My Cart
          <AiOutlineArrowRight onClick={() => setCartVisibility(false)} />
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
              <h3>Cart Total: {cart.reduce((n, { total }) => n + total, 0)}</h3>
              <p>Delivery Charges: ₹ 49</p>
              <div>Subtotal : {subtotal}</div>
            </div>
            <CartComponent />
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
          <button
            className="checkout-button"
            onClick={() => history.push("/payment")}
          >
            <p>Proceed to Checkout:</p>
            <p>{subtotal}</p>
          </button>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.product.cart,
});

export default connect(mapStateToProps, null)(Cartcontent);
