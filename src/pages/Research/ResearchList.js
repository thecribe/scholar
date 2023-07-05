import React from "react";
import { CenterDiv, ConfigurationStyled } from "../../ReuseableStyles";
import { useState } from "react";
import { searchArray } from "../../ExtraFunctions";
import { FaArrowRight } from "react-icons/fa";
import SortComponent from "../../components/SortComponent/SortComponent";
import SearchBox from "../../components/SearchBar/SearchBox";

const ResearchList = ({ arr }) => {
  const [interval, setInterval] = useState(10);
  const [input, setInput] = useState("");
  const [searchfield, setSearchFiled] = useState("");
  const [sortArr, setSortArr] = useState({
    start: 0,
    end: interval,
  });

  const output = searchArray(arr, searchfield);

  const sortArrHandler = (e) => {
    setSortArr({ ...sortArr, start: Number(e) * interval, end: interval });
  };

  const controlInterval = (e) => {
    setInterval(Number(e));
    setSortArr({ ...sortArr, start: 0 * Number(e), end: Number(e) });
  };

  return (
    <CenterDiv>
      <ConfigurationStyled>
        {output.length > 0 && (
          <div className="inner-div">
            <div className="totalCard">
              <label htmlFor="totalCardNo">Number of Profile per Page:</label>
              <div className="action">
                <input
                  type="number"
                  id="cardNumber"
                  placeholder="minValue, 5"
                  max={output.length}
                  min={5}
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
                <div className="icon" onClick={() => controlInterval(input)}>
                  <FaArrowRight />
                </div>
              </div>

              <SortComponent
                arr={output}
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
      {output.length > 0 ? <ResearchList /> : null}
    </CenterDiv>
  );
};

export default ResearchList;
