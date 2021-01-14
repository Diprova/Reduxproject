import React, { useState, useEffect } from "react";
import AddCard from "./CategoryCard";
import "./category.css";

const Category = ({ context }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem([...context.category]);
  }, []);
  useEffect(() => {
    if (!context.category.length) {
      context.getCategory();
    }
  }, [context.category]);

  return (
    <div className="carousel container">
      <div className="carousel-slide">
        {item.map((element, i) => (
          <AddCard key={element._id} element={element} />
        ))}
      </div>
    </div>
  );
};
export default Category;
