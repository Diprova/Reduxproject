import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import DashboardCard from "../Components/Home/ProductDetails/DashboardCard";
import Category from "../Components/Category/Category";
import ProductReviews from "./ProductReviews";
import { AiOutlineShop } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./stylesRoute.css";

const Dashboard = ({ location, context }) => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  useEffect(() => {
    if (!context.products.length) {
      context.getProduct();
    }
  }, [context.products]);

  const dropdownItem = (
    <div
      className="dropdown-item"
      onClick={() => {
        setDropdownVisibility(false);
      }}
    >
      <p>{context.updatedCategory[5] && context.updatedCategory[5].title} </p>
      <p>{context.updatedCategory[6] && context.updatedCategory[6].title} </p>
      <p>{context.updatedCategory[7] && context.updatedCategory[7].title} </p>
    </div>
  );
  return (
    <div className="container">
      <div className="category-header container">
        <div className="market">
          <AiOutlineShop size={25} />
          <span>Super Store- 7 Kolka..</span>
        </div>
        <div className="item">
          <span>
            {context.updatedCategory[0] && context.updatedCategory[0].title}{" "}
          </span>
          <span>
            {context.updatedCategory[1] && context.updatedCategory[1].title}{" "}
          </span>
          <span>
            {context.updatedCategory[2] && context.updatedCategory[2].title}{" "}
          </span>
          <span>
            {context.updatedCategory[3] && context.updatedCategory[3].title}{" "}
          </span>
          <span>
            {context.updatedCategory[4] && context.updatedCategory[4].title}{" "}
          </span>

          <span
            onClick={() => {
              setDropdownVisibility(!dropdownVisibility);
            }}
          >
            More <MdKeyboardArrowDown size={15} className="down-Arrow" />
          </span>
        </div>
      </div>
      {dropdownVisibility && (
        <div
          onClick={() => {
            setDropdownVisibility(false);
          }}
        >
          {dropdownItem}
        </div>
      )}
      {location.state && (
        <ProductReviews itemId={location.state._id} context={context} />
      )}
      <DashboardCard context={context} />
      <div className="category-container container">
        <Category context={context} />
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
