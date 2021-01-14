import React from "react";

const CardBox = ({ noofitems }) => {
  const { images, productName, unitPrice,unitType,unitStartPoint } = noofitems;
  return (
    <div className="cardBox">
      <img src={images[0]} alt="img" />
      <p>{productName}</p>
      <p>{unitPrice}/{unitStartPoint}{unitType}</p>
    </div>
  );
};

export default CardBox;