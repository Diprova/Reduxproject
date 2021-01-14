import React from "react";

const Location = ({ setLocationVisibility, context }) => {
  return (
    <div className="location" onClick={() => setLocationVisibility(true)}>
      <p className="element">{context.location}</p>
    </div>
  );
};
export default Location;
