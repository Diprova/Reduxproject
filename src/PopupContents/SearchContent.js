import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./popupContents.css";
const SearchContent = ({ context, setSearchVisibility, searchVisibility }) => {
  const [product, setProduct] = useState([]);

  const showHideClassName = searchVisibility
    ? "modal display-block"
    : "modal display-none";

  let history = useHistory();
  useEffect(() => {
    setProduct([...context.products]);
  }, []);
  useEffect(() => {
    if (!context.products.length) {
      context.getProduct();
    }
  }, [context.products]);

  let product3 = context.updatedProducts.find(
    (obj) => obj.productName === "Pachabale Banana"
  );

  const mousehover = (e) => {
    context.showItem(e);
  };

  return (
    <div
      className={showHideClassName}
      onClick={() => {
        setSearchVisibility(false);
      }}
    >
      <div className="search-content container">
        <div className="trending-template">TRENDING</div>
        {product.map((element, index) => {
          return (
            <div
              className="search-productContent"
              onMouseOver={(e) => mousehover(element.productName)}
              onClick={() =>
                history.push({ pathname: "/dashboard", state: { ...element } })
              }
              onMouseLeave={null}
              key={index}
            >
              <img src={element.images[0]} alt="img" className="search-img" />
              <span className="search-productName">{element.productName}</span>
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

export default SearchContent;
