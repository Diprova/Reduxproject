import React from "react";
import grofersLogo from "../../assets/grofersLogo.png";
import { useHistory } from "react-router-dom";

const Logo = () => {
  let history = useHistory();
  return (
    <div className="image" onClick={() => history.push("/")}>
      <img src={grofersLogo} alt="grofersLogo" />
    </div>
  );
};
export default Logo;
