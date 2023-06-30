import React from "react";
import { ButtonStyled, CenterDiv, ImgStyle } from "../../ReuseableStyles";
import { NavLink } from "react-router-dom";

const Staff = () => {
  return (
    <CenterDiv className="inner-div">
      <div className="header-box">
        <h3 className="section-header-text">About US</h3>
        <h2 className="header-text">Staff Repository</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          fugiat quos obcaecati in corrupti ad maxime perspiciatis harum natus
          molestiae eius non, veniam sequi odio qui tempora dolorem vero
          aperiam.
        </p>
        <NavLink>
          <ButtonStyled type="transparent">View Repository</ButtonStyled>
        </NavLink>
      </div>
      <div className="img-box">
        <ImgStyle src="./bg.jpg" />
      </div>
    </CenterDiv>
  );
};

export default Staff;
