import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./productDetails.css";
import DashboardButton from "./DashboardButton";
import { getProduct } from "../../../redux/action/product";
import { connect } from "react-redux";

const DashboardCard = ({ getProduct, products }) => {
  let history = useHistory();

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="dashboard-card container">
      {products &&
        products.map((item) => {
          return (
            <div key={item._id} className="dashboardCard-content container">
              <div
                onClick={() =>
                  history.push({ pathname: "/dashboard", state: { ...item } })
                }
              >
                <img src={item.images[0]} alt="image" />
                <ul style={{ listStyleType: "none", color: "#534e52" }}>
                  <li>
                    <h6>{item.productName}</h6>
                  </li>
                  <li> ₹ {item.unitPrice}</li>
                  <li>
                    {item.unitStartPoint}
                    {item.unitType}
                  </li>
                </ul>
              </div>
              <span>
                <DashboardButton item={item} />
              </span>
            </div>
          );
        })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  products: state.product.products
});

export default connect(mapStateToProps, { getProduct })(DashboardCard);
