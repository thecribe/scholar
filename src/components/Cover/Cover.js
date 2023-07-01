import React from "react";
import { CenterDiv } from "../../ReuseableStyles";
import SearchBar from "../SearchQuery/SearchBar";
import { CoverStyled } from "./CoverStyled";

const Cover = ({ res }) => {
  return (
    <CoverStyled>
      <CenterDiv className="inner-div">
        <SearchBar res={res} />
      </CenterDiv>
    </CoverStyled>
  );
};

export default Cover;
