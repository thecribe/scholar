import React from "react";
import { StaffStyled } from "./StaffStyled";
import { SectionStyled } from "../../ReuseableStyles";
import Cover from "../../components/Cover/Cover";
import { useState } from "react";
import StaffList from "./StaffList";
import { filterArray } from "../../ExtraFunctions";

const Staff = () => {
  const [searchfield, setSearchField] = useState({
    faculty: "default",
    department: "default",
  });

  const staff = [
    {
      name: "1john",
      faculty: "science",
      department: "chemistry",
    },
    {
      name: "2john",
      faculty: "science",
      department: "chemistry",
    },
    {
      name: "3dada james",
      faculty: "science",
      department: "geology",
    },
    {
      name: "4john",
      faculty: "science",
      department: "chemistry",
    },
    {
      name: "5dada james",
      faculty: "science",
      department: "geology",
    },
    {
      name: "6john",
      faculty: "science",
      department: "chemistry",
    },
    {
      name: "7dada james",
      faculty: "science",
      department: "geology",
    },
    {
      name: "8john",
      faculty: "science",
      department: "chemistry",
    },
    {
      name: "9dada james",
      faculty: "science",
      department: "geology",
    },
    {
      name: "10bricks johnson",
      faculty: "technology",
      department: "elect",
    },
    {
      name: "11dave jame",
      faculty: "technology",
      department: "computer",
    },
    {
      name: "12john",
      faculty: "science",
      department: "chemistry",
    },
    {
      name: "13dada james",
      faculty: "science",
      department: "geology",
    },
    {
      name: "14john",
      faculty: "science",
      department: "chemistry",
    },
    {
      name: "15dada james",
      faculty: "science",
      department: "geology",
    },
    {
      name: "16john",
      faculty: "science",
      department: "chemistry",
    },
    {
      name: "17dada james",
      faculty: "science",
      department: "geology",
    },
    {
      name: "18john",
      faculty: "science",
      department: "chemistry",
    },
    {
      name: "19dada james",
      faculty: "science",
      department: "geology",
    },
    {
      name: "20bricks johnson",
      faculty: "technology",
      department: "elect",
    },
    {
      name: "21dave jame",
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
      <SectionStyled className="staff-list">
        <StaffList arr={response} />
      </SectionStyled>
    </StaffStyled>
  );
};

export default Staff;
