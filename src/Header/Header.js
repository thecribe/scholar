import React from "react";
import { HeaderStyle } from "./HeaderStyle";
import { CenterDiv, ImgStyle } from "../ReuseableStyles";
import NavLinks from "./NavLink/NavLinks";
import { NavLinkStyled } from "./NavLink/NavLinkStyyled";
import { FiSettings } from "react-icons/fi";
import { VscThreeBars } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyle>
      <CenterDiv>
        <div className="nav-bar">
          <div className="site-logo">
            <NavLink to="/">
              <ImgStyle src="./logo192.png" />
            </NavLink>
          </div>
          <NavLinkStyled className="nav-links">
            <NavLinks />
          </NavLinkStyled>
          <div className="header-extras">
            <div className="site-settings">
              <p>
                <FiSettings className="icons" />
                <span id="hidden-text">Site Settings</span>
              </p>
            </div>
            <div className="hamburger">
              <VscThreeBars className="icons" />
            </div>
          </div>
        </div>
      </CenterDiv>
    </HeaderStyle>
  );
};

export default Header;
