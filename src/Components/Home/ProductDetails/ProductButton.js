import React from "react";
import {
  increment,
  decrement,
} from "../../../redux/action/product";
import { connect } from "react-redux";

const ProductButton = ({
  item,
  increment,
  decrement,
  index,
}) => {
  const handleIncrement = () => {
    increment({ index, id: item._id });
  };

  const handleDecrement = () => {
    decrement({ index, id: item._id });
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
  decrement,
  increment,
};
export default connect(null, mapDispatchToProps)(ProductButton);
