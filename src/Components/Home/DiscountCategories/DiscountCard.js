import React, { useState, useEffect } from "react";
import CardBox from "./CardBox";
import Api from "../../../Utility/restapi";

const DiscountCard = () => {
  const [cardItem, setCardItem] = useState([]);

  useEffect(() => {
    func();
  }, []);

  const func = async () => {
    let res = await Api.get("/api/product");
    console.log(res);
    setCardItem(res);
  };

  return (
    <div className="cardBoxDetails">
      {cardItem.map((noofitems) => {
        return <CardBox key={noofitems._id} noofitems={noofitems} />;
      })}
    </div>
  );
};

export default DiscountCard;