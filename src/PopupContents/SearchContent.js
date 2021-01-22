import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./popupContents.css";
import { getProduct } from "../redux/action/product";
import { connect } from "react-redux";

const SearchContent = ({
  setSearchVisibility,
  searchVisibility,
  getProduct,
  products,
}) => {
  const showHideClassName = searchVisibility
    ? "modal display-block"
    : "modal display-none";

  let history = useHistory();
  console.log(products);

  useEffect(() => {
    getProduct();
  }, []);

  let product3 =
    products && products.find((obj) => obj.productName === "Pachabale Banana");


  return (
    <div
      className={showHideClassName}
      onClick={() => {
        setSearchVisibility(false);
      }}
    >
      <div className="search-content container">
        <div className="trending-template">TRENDING</div>
        {products &&
          products.map((element, index) => {
            return (
              <div
                className="search-productContent"
                onClick={() =>
                  history.push({
                    pathname: "/dashboard",
                    state: { ...element },
                  })
                }
                onMouseLeave={null}
                key={index}
              >
                <img src={element.images[0]} alt="img" className="search-img" />
                <span className="search-productName">
                  {element.productName}
                </span>
              </div>
            );
          })}
        <div className="trending-template">FREQUENT SEARCHES</div>
        <div className="search-productContent">
          <img src={product3.images[0]} alt="img" className="search-img" />
          <span className="search-productName">{product3.productName}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, { getProduct })(SearchContent);
