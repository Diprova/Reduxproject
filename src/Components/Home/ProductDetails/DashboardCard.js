import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./productDetails.css";
import DashboardButton from "./DashboardButton";

const DashboardCard = ({ context }) => {
  const [product, setProduct] = useState([]);

  let history = useHistory();

  useEffect(() => {
    setProduct([...context.products]);
  }, []);
  useEffect(() => {
    if (!context.products.length) {
      context.getProduct();
    }
  }, [context.products]);

  return (
    <div className="dashboard-card container">
      {product.map((item) => {
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
              <DashboardButton item={item} context={context}/>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCard;
