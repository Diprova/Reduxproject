import React from "react";
import "./popupContents.css";
import { connect } from "react-redux";

const Payment = ({ cart }) => {
    console.log(cart);
  let subtotal = cart.reduce((n, { total }) => n + total + 49, 0);
  return (
    <div className="payment container">
      <div className="payment-box container">
        <h2>Your total price is - {subtotal}</h2>
        <button>Pay</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.product.cart,
});

export default connect(mapStateToProps, null)(Payment);
