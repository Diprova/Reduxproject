import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { connect } from "react-redux";

const MyCart = ({ setCartVisibility, cart }) => {
  let totalcount = cart.reduce((n, { count }) => n + count, 0);
  return (
    <div className="cart" onClick={() => setCartVisibility(true)}>
      {totalcount !== 0 && <div className="count-icon">{totalcount}</div>}
      <AiOutlineShoppingCart size={40} className="cartIcon" />
      <h4>My Cart</h4>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.product.cart,
});
export default connect(mapStateToProps, null)(MyCart);
