import React from "react";

const AddCard = ({ element }) => {
  const { image, title } = element;
  return (
    <div className="addCart">
      <img src={image} alt="items" />
      <p>{title}</p>
    </div>
  );
};
export default AddCard;