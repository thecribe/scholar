import React from "react";
import { ResearchStyled } from "./ResearchStyled";
import { SectionStyled } from "../../ReuseableStyles";
import Cover from "../../components/Cover/Cover";
import { useState } from "react";

const Research = () => {
  const [searchfield, setSearchField] = useState({
    faculty: "default",
    department: "default",
  });
  const resHandler = ({ faculty, department }) => {
    setSearchField({ faculty, department });
  };

  return (
    <ResearchStyled>
      <SectionStyled>
        <Cover res={(e) => resHandler(e)} />
      </SectionStyled>
    </ResearchStyled>
  );
};

export default Research;
