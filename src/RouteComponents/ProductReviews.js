import React, { useState, useEffect } from "react";
import refund from "../assets/return.webp";
import lowestPrice from "../assets/lowest-price.webp";
import "./stylesRoute.css";

const ProductReviews = ({ itemId, context, item }) => {
  const [itemDetails, setitemDetails] = useState({});

  useEffect(() => {
    setitemDetails(context.products.find((e) => e._id === itemId));
  }, []);

  useEffect(() => {
    if (context.products._id !== itemId) {
      setitemDetails(context.products.find((e) => e._id === itemId));
    }
  }, [itemId]);
  console.log(itemDetails);

  const increment = () => {
    setitemDetails({ ...itemDetails, count: itemDetails.count + 1 });
    context.increment(itemId);
    context.addToCart(itemId);
    context.addTotal(itemId);
  };

  const decrement = () => {
    setitemDetails({ ...itemDetails, count: itemDetails.count - 1 });
    context.decrement(itemId);
    itemDetails.count === 1 && context.removeFromCart(itemId);
    context.reduceFromTotal(itemId);
  };

  const addbutton = (
    <button className="cart-button" onClick={increment}>
      Add Cart
    </button>
  );

  const controlButton = (
    <div className="cart-componentButton">
      <button onClick={decrement}>-</button>
      <span>{itemDetails.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
  console.log(context.user);
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
            {!itemDetails.count ? addbutton : controlButton}
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
                  Get difference refunded if you find it cheaper anywhere else.
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

export default ProductReviews;
