import React from "react";
import Card from "../../components/Card/Card";
import { ButtonStyled, ImgStyle } from "../../ReuseableStyles";
import { NavLink } from "react-router-dom";

const StaffDisplay = ({ arr }) => {
  return (
    <>
      <div className="staff-display">
        {arr.map((e, index) => (
          <Card
            key={index}
            padding="0rem"
            dimension={{ width: "100%", height: "100%" }}
          >
            <div className="inner-div">
              <div className="img-box">
                <ImgStyle src="./profile/philip.jpg" />
              </div>
              <div className="name">
                <h3>{e.name.toUpperCase()}</h3>
                <p>email</p>
              </div>
              <NavLink>
                <ButtonStyled type="transparent">View Profile</ButtonStyled>
              </NavLink>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default StaffDisplay;
