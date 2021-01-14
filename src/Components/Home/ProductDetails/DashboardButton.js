import React, { useState } from "react";

const DashboardButton = ({ item, context }) => {
  const [count, setCount] = useState(item.count);

  const increment = (e) => {
    e.preventDefault();
    return (
      setCount(context.increment(item._id)),
      context.addToCart(item._id),
      context.addTotal(item._id)
    );
  };

  const decrement = (e) => {
    e.preventDefault();
    return (
      setCount(context.decrement(item._id)),
      count === 1 && context.removeFromCart(item._id),
      context.reduceFromTotal(item._id)
    );
  };

  const addbutn = (
    <button className="addbutn" onClick={increment}>
      Add
    </button>
  );

  const cntrlbutn = (
    <div className="cntrlbutn">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
  return <>{!count ? addbutn : cntrlbutn}</>;
};

export default DashboardButton;
