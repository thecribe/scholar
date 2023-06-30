import React from "react";
import { CenterDiv } from "../../ReuseableStyles";
import Card from "../../components/Card/Card";
import { useTheme } from "styled-components";

const About = () => {
  const theme = useTheme();
  return (
    <CenterDiv className="inner-div">
      <div className="header-box">
        <h3 className="section-header-text">About US</h3>
        <h2 className="header-text">
          Welcome to Obafemi Awolowo Univeristy Scholar Repository
        </h2>
      </div>

      <div className="content-box">
        <Card
          bg={theme.color.primary}
          dimension={{ width: "400px", height: "500px" }}
        ></Card>
        <Card
          bg={theme.color.primary}
          dimension={{ width: "400px", height: "500px" }}
        ></Card>
        <Card
          bg={theme.color.primary}
          dimension={{ width: "400px", height: "500px" }}
        ></Card>
      </div>
    </CenterDiv>
  );
};

export default About;
