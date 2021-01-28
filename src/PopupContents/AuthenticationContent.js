import React from "react";
import { useHistory } from "react-router-dom";
import { RiLayoutRight2Line } from "react-icons/ri";
import "./popupContents.css";
import { IoMdClose } from "react-icons/io";

const AuthenticationContent = ({ setAuthenVisibility, authenVisibility }) => {
  let history = useHistory();

  const showHideClassName = authenVisibility
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClassName}>
      <IoMdClose
        className="close-icon"
        onClick={() => setAuthenVisibility(false)}
        size={45}
      />
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
