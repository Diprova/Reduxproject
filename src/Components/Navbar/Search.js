import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { getProduct } from "../../redux/action/product";
import { connect } from "react-redux";

const Search = ({
  setSearchVisibility,
  searchVisibility,
  getProduct,
  products,
  show,
}) => {
  const [keyPress, setKeyPress] = useState(false);
  const [index, setIndex] = useState(0);
  let history = useHistory();


  useEffect(() => {
    getProduct();
  }, []);

  const keydown = (e) => {
    if (e.keyCode === 40) {
      setKeyPress(true);
      if (index >= 0 && index <= 6) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    } else if (e.keyCode === 38) {
      if (index >= 1 && index <= 7) {
        setIndex(index - 1);
      } else {
        setKeyPress(false);
      }
    } else {
      if (e.keyCode === 13) {
        const item = products.find(
          (elemnt) => elemnt.productName === products[index].productName
        );
        history.push({ pathname: "/dashboard", state: { ...item } });
        setSearchVisibility(false);
      }
    }
  };

  const onkeyup = (e) => {
    if (e.keyCode === 27) {
    }
  };

  return (
    <div className="wrap">
      {!searchVisibility && (
        <div className="category-btn" onClick={() => window.scrollTo(0, 798)}>
          <button>Categories</button>
        </div>
      )}
      <input
        type="search"
        placeholder="Search for products" 
        onChange={keydown}
        value={keyPress ? products[index].productName : ""}
        onKeyUp={(e) => onkeyup(e)}
        onKeyDown={(e) => keydown(e)}
        onClick={() => setSearchVisibility(true)}
      />

      <button type="submit" className="searchButton">
        <BiSearchAlt size={22} />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  show: state.product.show,
});

export default connect(mapStateToProps, { getProduct })(Search);
