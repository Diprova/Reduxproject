import React from "react";
import {
  increment,
  decrement,
  getItem,
  addToCart,
  removeFromCart,
  addTotal,
  removeFromTotal,
} from "../../../redux/action/product";
import { connect } from "react-redux";

const ProductButton = ({
  item,
  increment,
  decrement,
  getItem,
  addToCart,
  removeFromCart,
  addTotal,
  removeFromTotal,
}) => {
  const handleIncrement = () => {
    getItem(item._id), increment(),item.count===1 && addToCart(), addTotal();
  };

  const handleDecrement = () => {
    getItem(item._id),
      decrement(),
      item.count === 0 && removeFromCart(),
      removeFromTotal();
  };

  const addbtn = (
    <div className="addbtn">
      <button className="addbtn-btn" onClick={handleIncrement}>
        Add
      </button>
      <button className="span-btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );

  const cntrlbtn = (
    <div className="cntrlbtn">
      <button className="dcrmntbtn" onClick={handleDecrement}>
        -
      </button>
      <span className="spanCount">{item.count}</span>
      <button className="incrmntbtn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
  return <div>{!item.count ? addbtn : cntrlbtn}</div>;
};

const mapDispatchToProps = {
  removeFromTotal,
  addTotal,
  removeFromCart,
  addToCart,
  getItem,
  decrement,
  increment,
};
export default connect(null, mapDispatchToProps)(ProductButton);
