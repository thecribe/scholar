import React from "react";
import { SortComponentStyle } from "./SortComponentStyle";
import { useState } from "react";
import { useEffect } from "react";

const SortComponent = ({ arr, sortArrFunc, interval }) => {
  let sortOutput = [1];

  const [selectedValue, setSelectedValue] = useState(0);

  for (let i = 1; i <= Math.ceil(arr.length / interval); i++) {
    sortOutput.push(i * interval);
  }

  const selectHandler = (val) => {
    setSelectedValue(val.target.value);
  };

  useEffect(() => {
    sortArrFunc(selectedValue);
  }, [selectedValue]);

  return (
    <SortComponentStyle>
      <label htmlFor="sort">Pages</label>
      <select
        name="sort"
        id="sort"
        value={selectedValue}
        onChange={selectHandler}
      >
        {sortOutput.map((e, index) => {
          if (index < sortOutput.length - 1) {
            return (
              <option key={index} value={index}>
                {sortOutput[index] + "-" + sortOutput[index + 1]}
              </option>
            );
          }
        })}
      </select>
    </SortComponentStyle>
  );
};

export default SortComponent;
