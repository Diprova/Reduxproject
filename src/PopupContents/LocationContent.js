import React from "react";
import kolkata from "../assets/kolkata.png";
import bangalore from "../assets/bangalore.jpg";
import "./popupContents.css";
import { locationWork } from "../redux/action/location";
import { connect } from "react-redux";
import { IoMdClose } from "react-icons/io";

const LocationContent = ({
  locationVisibility,
  setLocationVisibility,
  locationWork,
}) => {
  const showHideClassName = locationVisibility
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <IoMdClose
        className="close-icon"
        size={50}
        onClick={() => setLocationVisibility(false)}
      />

      <div className="location-content container">
        <h3>Select your City</h3>
        <div className="location-button">
          <div
            onClick={() => (
              setLocationVisibility(false),
              locationWork({ location: "Kolkata" })
            )}
          >
            <img src={kolkata} alt="img" />
            <p>Kolkata</p>
          </div>
          <div
            onClick={() => (
              setLocationVisibility(false),
              locationWork({ location: "Bangalore" })
            )}
          >
            <img src={bangalore} alt="img" />
            <p>Bangalore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  location: state.location.location,
});
export default connect(mapStateToProps, { locationWork })(LocationContent);
