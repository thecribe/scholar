import React from "react";
import { CardStyle } from "./CardStyle";

const Card = ({ bg, dimension }) => {
  console.log(dimension);
  return (
    <CardStyle className="card" bg={bg} dimension={dimension}>
      card
    </CardStyle>
  );
};

export default Card;
