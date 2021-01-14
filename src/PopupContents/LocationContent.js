import React from "react";
import kolkata from "../assets/kolkata.png";
import bangalore from "../assets/bangalore.jpg";
import "./popupContents.css";

const LocationContent = ({
  locationVisibility,
  setLocationVisibility,
  context,
}) => {
  const showHideClassName = locationVisibility
    ? "modal display-block"
    : "modal display-none";
  return (
    <div
      className={showHideClassName}
      onClick={() => setLocationVisibility(false)}
    >
      <div className="location-content container">
        <h3>Select your City</h3>
        <div className="location-button">
          <div>
            <img
              src={kolkata}
              alt="img"
              onClick={() => (
                setLocationVisibility(false), (context.location = "Kolkata")
              )}
            />
            <p>Kolkata</p>
          </div>
          <div>
            <img
              src={bangalore}
              alt="img"
              onClick={() => (
                setLocationVisibility(false), (context.location = "Bangalore")
              )}
            />
            <span>Bangalore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationContent;
