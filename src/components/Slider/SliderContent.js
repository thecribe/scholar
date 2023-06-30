import React from "react";
import { SliderStyle } from "./SliderStyle";
import { ButtonStyled, CenterDiv, ImgStyle } from "../../ReuseableStyles";
import { NavLink } from "react-router-dom";

const SliderContent = ({ detail }) => {
  return (
    <SliderStyle bg={detail.background}>
      <CenterDiv className="container">
        <div className="slider-text">
          <h3 className="section-header-text">Featured Profile</h3>
          <h2 className="header-text">{detail.header_text}</h2>
          <p>{detail.description}</p>
          <NavLink>
            <ButtonStyled type="transparent">View Profile</ButtonStyled>
          </NavLink>
        </div>
        <div className="slider-image">
          <ImgStyle src={detail.profile_img} />
        </div>
      </CenterDiv>
    </SliderStyle>
  );
};

export default SliderContent;
