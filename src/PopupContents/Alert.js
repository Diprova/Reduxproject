import React from "react";
import "./popupContents.css";
import { connect } from "react-redux";

const Alert = ({ alerts }) => (
  <div className="alert">
    {alerts.length > 0 &&
      alerts.map((e) => {
        return <div className="alertLine" key={e.id}>{e.message}</div>;
      })}
  </div>
);
const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, null)(Alert);
