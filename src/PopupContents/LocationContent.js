import React, { useEffect } from "react";
import kolkata from "../assets/kolkata.png";
import bangalore from "../assets/bangalore.jpg";
import "./popupContents.css";
import { locationWork } from "../redux/action/location";
import { connect } from "react-redux";

const LocationContent = ({
  locationVisibility,
  setLocationVisibility,
  locationWork,
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
                setLocationVisibility(false), (locationWork({location : "Kolkata"}))
              )}
            />
            <p>Kolkata</p>
          </div>
          <div>
            <img
              src={bangalore}
              alt="img"
              onClick={() => (
                setLocationVisibility(false), (locationWork({location : "Bangalore"}))
              )}
            />
            <span>Bangalore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  location: state.location.location,
});
export default connect(mapStateToProps,{locationWork})(LocationContent);
