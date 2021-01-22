import React from "react";
import { increment, decrement } from "../../../redux/action/product";
import { connect } from "react-redux";

const DashboardButton = ({ item, products, increment, decrement }) => {
  let itemIndex = products.findIndex((e) => e._id === item._id);

  const incrementItem = (e) => {
    e.preventDefault();
    increment({ index: itemIndex, id: item._id });
  };

  const decrementItem = (e) => {
    e.preventDefault();
    decrement({ index: itemIndex, id: item._id });
  };

  const addbutn = (
    <button className="addbutn" onClick={incrementItem}>
      Add
    </button>
  );

  const cntrlbutn = (
    <div className="cntrlbutn">
      <button onClick={decrementItem}>-</button>
      <span>{item.count}</span>
      <button onClick={incrementItem}>+</button>
    </div>
  );
  return <div>{item.count === 0 ? addbutn : cntrlbutn}</div>;
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardButton);
