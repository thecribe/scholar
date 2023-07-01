import React from "react";
import { StudentStyled } from "./StudentStyled";
import { SectionStyled } from "../../ReuseableStyles";
import Cover from "../../components/Cover/Cover";
import { useState } from "react";

const Student = () => {
  const [searchfield, setSearchField] = useState({
    faculty: "default",
    department: "default",
  });
  const resHandler = ({ faculty, department }) => {
    setSearchField({ faculty, department });
  };
  return (
    <StudentStyled>
      <SectionStyled>
        <Cover res={(e) => resHandler(e)} />
      </SectionStyled>
    </StudentStyled>
  );
};

export default Student;
