import React from "react";
import { StaffStyled } from "./StaffStyled";
import { SectionStyled, filterArray } from "../../ReuseableStyles";
import Cover from "../../components/Cover/Cover";
import { useState } from "react";
import StaffList from "./StaffList";

const Staff = () => {
  const [searchfield, setSearchField] = useState({
    faculty: "default",
    department: "default",
  });

  const staff = [
    {
      name: "john",
      faculty: "science",
      department: "chemistry",
    },
    {
      name: "john",
      faculty: "science",
      department: "geology",
    },
    {
      name: "john",
      faculty: "technology",
      department: "elect",
    },
    {
      name: "john",
      faculty: "technology",
      department: "computer",
    },
  ];

  const resHandler = ({ faculty, department }) => {
    setSearchField({ faculty, department });
  };

  const response = filterArray(staff, searchfield);

  return (
    <StaffStyled>
      <SectionStyled>
        <Cover res={(e) => resHandler(e)} />
      </SectionStyled>
      <SectionStyled>
        <StaffList arr={response} />
      </SectionStyled>
    </StaffStyled>
  );
};

export default Staff;
