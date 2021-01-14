import React from "react";
import { useHistory } from "react-router-dom";

const MenubarContent = ({ setMenubarVisibility, setCartVisibility }) => {
  let history = useHistory();
  return (
    <div
      className="menubar-content container"
      onClick={() => setMenubarVisibility(false)}
    >
      <div className="welcome">Welcome</div>
      <p onClick={() => history.push("/login")}>Login</p>
      <p onClick={() => history.push("/register")}>Sign Up</p>
      <p onClick={() => setCartVisibility(true)}>Cart</p>
    </div>
  );
};

export default MenubarContent;
