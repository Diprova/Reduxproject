import React, { useState, useEffect } from "react";
import refund from "../assets/return.webp";
import lowestPrice from "../assets/lowest-price.webp";
import "./stylesRoute.css";
import { increment, decrement } from "../redux/action/product";
import { connect } from "react-redux";

const ProductReviews = ({ itemId, products, increment, decrement, index }) => {
  const [itemDetails, setitemDetails] = useState({});

  let incrementIndex = products.findIndex((e) => e._id === itemId);

  useEffect(() => {
    setitemDetails(products[incrementIndex]);
  }, [products[incrementIndex]]);

  useEffect(() => {
    if (products._id !== itemId) {
      setitemDetails(products[incrementIndex]);
    }
  }, [itemId]);

  const incrementItem = () => {
    increment({ index: incrementIndex, id: itemId });
  };

  const decrementItem = () => {
    decrement({ index:incrementIndex, id: itemId });
  };

  const addbutton = (
    <button className="cart-button" onClick={incrementItem}>
      Add Cart
    </button>
  );

  const controlButton = (
    <div className="cart-componentButton">
      <button onClick={decrementItem}>-</button>
      <span>{itemDetails.count}</span>
      <button onClick={incrementItem}>+</button>
    </div>
  );

  return (
    <div>
      {itemDetails.productName !== undefined && (
        <div className="reviews container">
          <div className="item-review container">
            <img src={itemDetails.images[0]} alt="images" />
            <div className="item-rating">
              <h6>Product Details</h6>
              <p>{itemDetails.type}</p>
              <p>{itemDetails.rating}</p>
              <p>{itemDetails.description}</p>
            </div>
          </div>

          <div className="item-price container">
            <p className="review-categoryName">{itemDetails.productName}</p>
            <p>
              Product MRP:{" "}
              <span className="productPrice">₹{itemDetails.unitPrice}</span>
            </p>
            <p>
              <span className="taxes">Inclusive of all taxes</span>
            </p>
            <p>
              <span className="taxes">Available In:</span>
            </p>
            <div className="quantity">
              {itemDetails.unitStartPoint}
              {itemDetails.unitType}
            </div>
            {itemDetails.count === 0 ? addbutton : controlButton}
            <div className="easy-returns">
              <h6>Why shop from Grofers?</h6>
              <div className="refund">
                <img src={refund} alt="img" />
                <div>
                  <p>Easy returns & refunds</p>
                  <p>Return products at doorstep and get refund in seconds.</p>
                </div>
              </div>
              <div className="lowest-price">
                <img src={lowestPrice} alt="img" />
                <div>
                  <p>Lowest price guaranteed</p>
                  <p>
                    Get difference refunded if you find it cheaper anywhere
                    else.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductReviews);
