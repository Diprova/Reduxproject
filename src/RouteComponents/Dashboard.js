import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import DashboardCard from "../Components/Home/ProductDetails/DashboardCard";
import Category from "../Components/Category/Category";
import ProductReviews from "./ProductReviews";
import { AiOutlineShop } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./stylesRoute.css";
import { getCategory } from "../redux/action/category";
import { connect } from "react-redux";

const Dashboard = ({
  location,
  getProduct,
  getCategory,
  category,
  products,
}) => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  useEffect(() => {
    getCategory();
  }, []);

  console.log(category);

  const dropdownItem = (
    <div
      className="dropdown-item"
      onClick={() => {
        setDropdownVisibility(false);
      }}
    >
      <p>{category && category[5].title} </p>
      <p>{category && category[6].title} </p>
      <p>{category && category[7].title} </p>
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
          <span>{category && category[0].title} </span>
          <span>{category && category[1].title} </span>
          <span>{category && category[2].title} </span>
          <span>{category && category[3].title} </span>
          <span>{category && category[4].title} </span>

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
      {location.state && <ProductReviews itemId={location.state._id} />}
      <DashboardCard />
      <div className="category-container container">
        <Category />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  category: state.category.category,
});

const DashboardConnect = connect(mapStateToProps, { getCategory })(Dashboard);
export default withRouter(DashboardConnect);
