import React from "react";
import { connect } from "react-redux";

const Location = ({ setLocationVisibility, location }) => {
  return (
    <div className="location" onClick={() => setLocationVisibility(true)}>
      <p className="element">{location}</p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  location: state.location.location,
});
export default connect(mapStateToProps, null)(Location);
