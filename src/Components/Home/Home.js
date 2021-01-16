import React from "react";
import CodeUse from "./CodeUse";
import DiscountProducts from "./DiscountCategories/DiscountProducts";
import EyeCatcher from "./EyeCatcher";
import Slide from "./Offers";
import ProductCard from "./ProductDetails/ProductCard";
import Category from "../Category/Category";
import "./home.css";

const Home = () => {
  
  return (
    <>
      <Category />
      <EyeCatcher />
      <Slide />
      <ProductCard />
      <CodeUse />
      <DiscountProducts />
    </>
  );
};

export default Home;
