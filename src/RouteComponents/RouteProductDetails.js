import React, { useState, useEffect } from "react";
import DashboardButton from "../Components/Home/ProductDetails/DashboardButton";
import { AiOutlineShop } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { getCategory } from "../redux/action/category";
import { getProduct } from "../redux/action/product";
import { connect } from "react-redux";

const RouteProductDetails = ({
  getCategory,
  getProduct,
  category,
  products,
}) => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  let history = useHistory();

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    getProduct();
  }, []);

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
      <div className="product-slot">
        <div className="category">
          <p>Fruites & Veggies</p>
          <p>Vegetables</p>
          <p>Fruits</p>
        </div>
        <div className="product-curtain container">
          <h4>Fruits & Veggies</h4>
          <div className="product-card">
            {products &&
              products.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="dashboardCard-content container"
                  >
                    <div>
                      <img
                        src={item.images[0]}
                        alt="image"
                        onClick={() =>
                          history.push({
                            pathname: "/dashboard",
                            state: { ...item },
                          })
                        }
                      />
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
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  category: state.category.category,
  products: state.product.products,
});

const mapDispatchToProps = {
  getCategory,
  getProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteProductDetails);
