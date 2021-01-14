import React, { useState } from "react";

const ProductButton = ({ context, item }) => {
  const [count, setCount] = useState(item.count);

  const increment = () => {
    return (
      setCount(context.increment(item._id)),
      context.addToCart(item._id),
      context.addTotal(item._id)
    );
  };

  const decrement = () => {
    return (
      setCount(context.decrement(item._id)),
      count === 1 && context.removeFromCart(item._id),
      context.reduceFromTotal(item._id)
    );
  };

  const addbtn = (
    <div className="addbtn">
      <button className="addbtn-btn" onClick={increment}>
        Add
      </button>
      <button className="span-btn" onClick={increment}>
        +
      </button>
    </div>
  );

  const cntrlbtn = (
    <div className="cntrlbtn">
      <button className="dcrmntbtn" onClick={decrement}>
        -
      </button>
      <span className="spanCount">{count}</span>
      <button className="incrmntbtn" onClick={increment}>
        +
      </button>
    </div>
  );
  return <div>{!count ? addbtn : cntrlbtn}</div>;
};

export default ProductButton;
