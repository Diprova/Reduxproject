import React from "react";
import { useHistory } from "react-router-dom";
import { RiLayoutRight2Line } from "react-icons/ri";
import "./popupContents.css";

const AuthenticationContent = ({ setAuthenVisibility, authenVisibility }) => {
  let history = useHistory();

  const showHideClassName = authenVisibility
    ? "modal display-block"
    : "modal display-none";
  return (
    <div
      className={showHideClassName}
      onClick={() => setAuthenVisibility(false)}
    >
      <div className="authentication-content">
        <div>
          <button
            className="authentication-button"
            onClick={() => history.push("/register")}
          >
            Login or Sign Up
          </button>
        </div>
        <div>
          <p onClick={() => window.scroll(0, 300)}>
            <RiLayoutRight2Line />
            <span>Offers</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationContent;
