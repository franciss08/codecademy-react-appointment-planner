import React from "react";

export const Tile = ({object}) => {
  const objectValues = Object.values(object);
  
  return (
    <div className="tile-container">
      {objectValues.map((value, index) => {
        return <p className={index === 0 ? "tile-title" : "tile"} key={`t${index}`}>{value}</p> 
      })}
    </div>
  );
};
