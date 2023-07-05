import React from "react";
import { ResearchStyled } from "./ResearchStyled";
import { SectionStyled } from "../../ReuseableStyles";
import Cover from "../../components/Cover/Cover";
import { useState } from "react";
import { filterArray } from "../../ExtraFunctions";
import ResearchList from "./ResearchList";

const Research = () => {
  const [searchfield, setSearchField] = useState({
    faculty: "default",
    department: "default",
  });

  const resHandler = ({ faculty, department }) => {
    setSearchField({ faculty, department });
  };
  const response = filterArray([], searchfield);
  return (
    <ResearchStyled>
      <SectionStyled>
        <Cover res={(e) => resHandler(e)} />
      </SectionStyled>
      <SectionStyled className="research-list">
        <ResearchList arr={response} />
      </SectionStyled>
    </ResearchStyled>
  );
};

export default Research;
