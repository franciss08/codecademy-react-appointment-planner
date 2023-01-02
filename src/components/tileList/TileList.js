import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({inputArray}) => {


  return (
    <div>
      {inputArray.map((element, index) => {
        return <Tile 
          object={element}
          key={index} />
      })}
    </div>
  );     
};
