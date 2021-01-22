import React from "react";
import "./popupContents.css";
import { increment, decrement } from "../redux/action/product";
import { connect } from "react-redux";

const CartComponent = ({ increment, decrement, cart, index,products }) => {


  const onClick=(item)=>{
    let index=products.findIndex(e=>e._id===item._id);
    increment({index,id:item._id})
  }

  const dOnClick=(item)=>{
    let index=products.findIndex(e=>e._id===item._id);
    decrement({index,id:item._id})
  }
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
              <button onClick={() => dOnClick(item)}>
                -
              </button>
              <span>{item.count}</span>
              <button onClick={()=>onClick(item)}>
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
  products:state.product.products
});

const mapDispatchToProps = {
  increment,
  decrement,
};
export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
