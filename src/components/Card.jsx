import React from "react";

const Card = ({ color, isPickColor, openModal }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    openModal(true);
  };
  return (
    <div className="card --border-bottom">
      <div
        className="card__color"
        style={{
          background: color,
          border: `2px solid ${isPickColor ? "red" : "transparent"}`,
        }}
        onClick={handleClick}
      ></div>
      <h2 className="card__title">
        Space Winter
        <br /> Modern & Sleek
      </h2>
    </div>
  );
};

export default Card;
