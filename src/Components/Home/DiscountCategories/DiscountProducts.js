import React, { useState, useEffect } from "react";
import DiscountList from "./DiscountList";
import "./discountCategories.css";
import { getProduct } from "../../../redux/action/product";
import { connect } from "react-redux";

const DiscountProducts = ({ getProduct, products }) => {
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {products &&
        products.map((item1) => {
          return <DiscountList key={item1._id} item={item1} />;
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});
export default connect(mapStateToProps, { getProduct })(DiscountProducts);
