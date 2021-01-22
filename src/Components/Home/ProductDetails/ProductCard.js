import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { useHistory } from "react-router-dom";
import "./productDetails.css";
import { getProduct } from "../../../redux/action/product";
import { connect } from "react-redux";

const ProductCard = ({ getProduct, products }) => {
  useEffect(() => {
    getProduct();
  }, []);

  let history = useHistory();
  return (
    <div className="product-details container">
      <div className="product-link">
        <span>Fresh Fruits & Veggies</span>
        <button
          className="see-all-btn"
          onClick={() => history.push({ pathname: "/routeProductDetails" })}
        >
          See all
        </button>
      </div>
      <div className="productCard container">
        {products &&
          products.map((item,index) => {
            return <Cards key={item._id} item={item} index={index}/>;
          })}
        <div className="seeAll-card">
          <button
            className="seeall-btn"
            onClick={() => history.push({ pathname: "/routeProductDetails" })}
          >
            See all
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});
export default connect(mapStateToProps, { getProduct })(ProductCard);
