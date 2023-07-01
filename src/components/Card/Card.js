import React from "react";
import { CardStyle } from "./CardStyle";

const Card = ({ bg, dimension, padding, children }) => {
  return (
    <CardStyle className="card" bg={bg} dimension={dimension} padding={padding}>
      {children}
    </CardStyle>
  );
};

export default Card;
