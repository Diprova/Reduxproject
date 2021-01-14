import React from "react";
import CodeUse from "./CodeUse";
import DiscountProducts from "./DiscountCategories/DiscountProducts";
import EyeCatcher from "./EyeCatcher";
import Slide from "./Offers";
import ProductCard from "./ProductDetails/ProductCard";
import Category from "../Category/Category";
import "./home.css";

const Home = ({ context }) => {
  
  return (
    <>
      <Category context={context} />
      <EyeCatcher />
      <Slide />
      <ProductCard context={context} />
      <CodeUse />
      <DiscountProducts context={context} />
    </>
  );
};

export default Home;
