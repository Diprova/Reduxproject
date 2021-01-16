import React, { useEffect } from "react";
import AddCard from "./CategoryCard";
import "./category.css";
import { getCategory } from "../../redux/action/category";
import { connect } from "react-redux";

const Category = ({ getCategory, category }) => {


  useEffect(()=>{
    getCategory()
  },[])


  return (
    <div className="carousel container">
      <div className="carousel-slide">
        {category && category.map((element, i) => (
          <AddCard key={element._id} element={element} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  category: state.category.category,
});
export default connect(mapStateToProps, { getCategory })(Category);
