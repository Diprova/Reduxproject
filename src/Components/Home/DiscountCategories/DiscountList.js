import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import DiscountCard from "./DiscountCard";
import { MdKeyboardArrowUp } from "react-icons/md";

const DiscountList = ({ item }) => {
  const [btnState, setbtnState] = useState(true);
  const { images, productName, description } = item;

  const handleClickOn = () => {
    return setbtnState(!btnState);
  };

  return (
    <div className="discountlistContainer container">
      <div
        className={btnState ? "discountList inactive" : "discountList active"}
      >
        <img src={images[0]} alt="images" />
        <div className="listDetails">
          <h2>{productName}</h2>
          <p>{description}</p>
        </div>
        <div
          className={btnState ? "listbtn inactive" : "listbtn active"}
          onClick={handleClickOn}
        >
          {btnState ? (
            <MdKeyboardArrowDown size={35} />
          ) : (
            <MdKeyboardArrowUp size={35} />
          )}
        </div>
      </div>

      {btnState ? null : <DiscountCard />}
    </div>
  );
};
export default DiscountList;
