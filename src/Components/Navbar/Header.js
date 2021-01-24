import React, { useState } from "react";
import Logo from "./Logo";
import Location from "./Location";
import Search from "./Search";
import LocationContent from "../../PopupContents/LocationContent";
import Cartcontent from "../../PopupContents/Cartcontent";
import AuthenticationContent from "../../PopupContents/AuthenticationContent";
import SearchContent from "../../PopupContents/SearchContent";
import Authentication from "./Authentication";
import MyCart from "./MyCart";
import "./styles.css";
import Menubar from "./Menubar";
import MenubarContent from "../../PopupContents/MenubarContent";

const Header = () => {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [locationVisibility, setLocationVisibility] = useState(false);
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [authenVisibility, setAuthenVisibility] = useState(false);
  const [menubarVisibility, setMenubarVisibility] = useState(false);

  return (
        <div className="header container">
          <div className="first-header">
            <Menubar setMenubarVisibility={setMenubarVisibility} />
            {menubarVisibility && (
              <MenubarContent
                setMenubarVisibility={setMenubarVisibility}
                setCartVisibility={setCartVisibility}
              />
            )}
            <Logo />

            <Location
              setLocationVisibility={setLocationVisibility}
            />
            {locationVisibility && (
              <LocationContent
                locationVisibility={locationVisibility}
                setLocationVisibility={setLocationVisibility}
              />
            )}
            <MyCart setCartVisibility={setCartVisibility} />
            {cartVisibility && (
              <Cartcontent
                cartVisibility={cartVisibility}
                setCartVisibility={setCartVisibility}
              />
            )}
          </div>
          <Search
            setSearchVisibility={setSearchVisibility}
            searchVisibility={searchVisibility}
          />
          {searchVisibility && (
            <SearchContent
              setSearchVisibility={setSearchVisibility}
              searchVisibility={searchVisibility}
            />
          )}
          <Authentication setAuthenVisibility={setAuthenVisibility} />
          {authenVisibility && (
            <AuthenticationContent
              setAuthenVisibility={setAuthenVisibility}
              authenVisibility={authenVisibility}
            />
          )}
          <div className="cart-webView">
            <MyCart setCartVisibility={setCartVisibility} />
            {cartVisibility && (
              <Cartcontent
                cartVisibility={cartVisibility}
                setCartVisibility={setCartVisibility}
              />
            )}
          </div>
        </div>
  );
};
export default Header;
