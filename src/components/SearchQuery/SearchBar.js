import React from "react";
import { Form } from "react-router-dom";
import { SearchBarStyled } from "./SearchBarStyled";
import { FaCaretDown } from "react-icons/fa";
import { ButtonStyled } from "../../ReuseableStyles";
import { useState } from "react";

const SearchBar = ({ res }) => {
  const [faculty, setFaculty] = useState("default");
  const [department, setDepartment] = useState("default");

  const facultyList = [
    {
      name: "Default",
      slug: "default",
    },
    {
      name: "Science",
      slug: "science",
    },
    {
      name: "Technology",
      slug: "technology",
    },
  ];

  const departmentList = [
    {
      name: "Default",
      slug: "default",
      faculty: "default",
    },
    {
      name: "  Department of chemisty",
      slug: "chemistry",
      faculty: "science",
    },
    {
      name: "  Department of Geology",
      slug: "geology",
      faculty: "science",
    },
    {
      name: "  Department of Electrical and Electronics",
      slug: "elect",
      faculty: "technology",
    },
    {
      name: "  Department of Mechanical engineering",
      slug: "mech-engine",
      faculty: "technology",
    },
    {
      name: "  Department of Computer ",
      slug: "computer",
      faculty: "technology",
    },
  ];

  const inputHandler = (slug, name) => {
    if (name === "faculty") {
      setFaculty(slug);
      setDepartment("default");
    } else {
      setDepartment(slug);
    }
  };

  return (
    <>
      <SearchBarStyled>
        <div className="input-box">
          <p>Enter a Faculty</p>
          <div className="input">
            {facultyList.map((fac, index) => {
              return (
                fac.slug === faculty && <p key={index}>Faculty of {fac.name}</p>
              );
            })}
            <FaCaretDown className="icons" />
            <div className="dropdown">
              {facultyList.map((fac, index) => (
                <p
                  key={index}
                  onClick={() => inputHandler(fac.slug, "faculty")}
                >
                  Faculty of {fac.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="input-box">
          <p>Enter a Department</p>
          <div className="input">
            {departmentList.map((depart, index) => {
              return (
                depart.slug === department && <p key={index}>{depart.name}</p>
              );
            })}
            <FaCaretDown className="icons" />
            <div className="dropdown">
              {departmentList.map((department, index) => {
                if (
                  department.faculty === faculty ||
                  department.faculty === "default"
                ) {
                  return (
                    <p
                      key={index}
                      onClick={() =>
                        inputHandler(department.slug, "department")
                      }
                    >
                      {department.name}
                    </p>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <button
          className="search-btn"
          onClick={() => res({ faculty, department })}
        >
          Filter
        </button>
      </SearchBarStyled>
    </>
  );
};

export default SearchBar;
