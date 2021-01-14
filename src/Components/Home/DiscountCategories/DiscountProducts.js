import React, { useState, useEffect } from "react";
import DiscountList from "./DiscountList";
import "./discountCategories.css";

const DiscountProducts = ({ context }) => {
  const [discountPrdct, setDiscoutPrdct] = useState([]);

  useEffect(() => {
    setDiscoutPrdct([...context.products]);
  }, []);
  useEffect(() => {
    if (!context.products.length) {
      context.getProduct();
    }
  }, [context.products]);

  return (
    <div>
      {discountPrdct.map((item1) => {
        return <DiscountList key={item1._id} item={item1} />;
      })}
    </div>
  );
};
export default DiscountProducts;
