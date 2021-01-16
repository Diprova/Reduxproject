import React, { useState, useEffect } from "react";
import CardBox from "./CardBox";
import { getProduct } from "../../../redux/action/product";
import { connect } from "react-redux";

const DiscountCard = ({ getProduct, products }) => {
  useEffect(() => {
    getProduct();
  }, []);
  console.log(products);

  return (
    <div className="cardBoxDetails">
      {products &&
        products.map((noofitems) => {
          return <CardBox key={noofitems._id} noofitems={noofitems} />;
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products
});
export default connect(mapStateToProps, { getProduct })(DiscountCard);
