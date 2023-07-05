import React from "react";
import { SearchBoxStyled } from "./SearchBoxStyled";

const SearchBox = ({ func, value }) => {
  return (
    <SearchBoxStyled>
      <input
        type="text"
        name="search-box"
        id="search-box"
        placeholder="Enter a search parameter"
        value={value}
        onChange={(e) => func(e)}
      />
    </SearchBoxStyled>
  );
};

export default SearchBox;
