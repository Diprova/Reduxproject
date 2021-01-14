import React, { useState } from "react";
import "../App.css";

const CartComponent = ({ context }) => {
  const cart = context.cart;

  return (
    <div className="cart-block">
      {cart.map((item) => {
        return (
          <div className="cart-component" key={item._id}>
            <div className="cart-componentContent">
              <img src={item.images[0]} alt="image" />
              <h4>{item.productName}</h4>
            </div>
            <div className="cart-componentButton">
              <button
                onClick={() => (
                  context.decrement(item._id),
                  item.count === 0 && context.removeFromCart(item._id),
                  context.reduceFromTotal(item._id)
                )}
              >
                -
              </button>
              <span>{item.count}</span>
              <button
                onClick={() => (
                  context.increment(item._id), context.addTotal(item._id)
                )}
              >
                +
              </button>
              <span className="price-details">
                {item.unitPrice}/{item.unitStartPoint}
                {item.unitType}
              </span>
              <h4>Total : {item.total}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CartComponent;
