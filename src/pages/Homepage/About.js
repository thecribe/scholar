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
          dimension={{ width: "100%", height: "100%" }}
          padding="2rem"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          officia atque vel veritatis architecto quasi voluptatem reprehenderit
          maxime ab iusto sequi, delectus enim? Voluptate soluta quibusdam, esse
          sed deserunt excepturi.
        </Card>
        <Card
          bg={theme.color.primary}
          dimension={{ width: "100%", height: "100%" }}
          padding="2rem"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nostrum
          inventore laboriosam sunt animi rerum, explicabo voluptatum totam
          tenetur alias quibusdam quisquam hic ducimus reiciendis, voluptate
          recusandae omnis. Perspiciatis, nihil?
        </Card>
        <Card
          bg={theme.color.primary}
          dimension={{ width: "100%", height: "100%" }}
          padding="2rem"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vero
          blanditiis, debitis amet officiis sit facilis praesentium hic illum ut
          maiores, nostrum modi vel, explicabo nesciunt obcaecati! Dolorem,
          ipsam voluptatum!
        </Card>
      </div>
    </CenterDiv>
  );
};

export default About;
