import React from "react";
import { CenterDiv, ConfigurationStyled } from "../../ReuseableStyles";
import SearchBox from "../../components/SearchBar/SearchBox";
import { useState } from "react";
import { searchArray } from "../../ExtraFunctions";
import StaffDisplay from "./StaffDisplay";
import SortComponent from "../../components/SortComponent/SortComponent";
import { FaArrowRight } from "react-icons/fa";

const StaffList = ({ arr }) => {
  const [interval, setInterval] = useState(10);
  const [input, setInput] = useState("");
  const [searchfield, setSearchFiled] = useState("");
  const [sortArr, setSortArr] = useState({
    start: 0,
    end: interval,
  });

  const staffOutput = searchArray(arr, searchfield);

  const sortArrHandler = (e) => {
    setSortArr({ ...sortArr, start: Number(e) * interval, end: interval });
  };

  const controlInterval = (e) => {
    setInterval(Number(e));
    setSortArr({ ...sortArr, start: 0 * Number(e), end: Number(e) });
  };

  return (
    <CenterDiv className="inner-div">
      <ConfigurationStyled>
        {staffOutput.length > 0 && (
          <div className="inner-div">
            <div className="totalCard">
              <label htmlFor="totalCardNo">Number of Profile per Page:</label>
              <div className="action">
                <input
                  type="number"
                  id="cardNumber"
                  placeholder="minValue, 5"
                  max={staffOutput.length}
                  min={5}
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
                <div className="icon" onClick={() => controlInterval(input)}>
                  <FaArrowRight />
                </div>
              </div>

              <SortComponent
                arr={staffOutput}
                sortArrFunc={(e) => sortArrHandler(e)}
                interval={interval}
              />
            </div>
          </div>
        )}
        <SearchBox
          func={(e) => setSearchFiled(e.target.value)}
          value={searchfield}
        />
      </ConfigurationStyled>

      {staffOutput.length > 0 ? (
        <StaffDisplay
          arr={[...staffOutput].splice(sortArr.start, sortArr.end)}
        />
      ) : (
        <p>No Search result</p>
      )}
    </CenterDiv>
  );
};

export default StaffList;
