import React from "react";
import "../App.css";
import {
  removeFromCart,
  increment,
  decrement,
  removeFromTotal,
  addTotal,
  getItem,
} from "../redux/action/product";
import { connect } from "react-redux";

const CartComponent = ({
  getItem,
  removeFromCart,
  increment,
  decrement,
  removeFromTotal,
  addTotal,
  cart,
}) => {
  console.log(cart);
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
                  getItem(item._id),
                  decrement(),
                  item.count === 0 && removeFromCart(),
                  removeFromTotal()
                )}
              >
                -
              </button>
              <span>{item.count}</span>
              <button
                onClick={() => (getItem(item._id), increment(), addTotal())}
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

const mapStateToProps = (state) => ({
  cart: state.product.cart,
});

const mapDispatchToProps = {
  getItem,
  increment,
  decrement,
  addTotal,
  removeFromTotal,
  removeFromCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
