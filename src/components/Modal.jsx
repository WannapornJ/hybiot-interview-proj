import React from "react";

const Modal = ({ colorList, color, changeColor }) => {
  return (
    <div className="modal --border-bottom">
      <p>Select Color:</p>
      <div className="color-picker">
        {colorList.map((col) => (
          <div
            className="color-picker__list"
            style={{
              background: col,
              border: `2px solid ${color === col ? 'red' : 'transparent'}`,
            }}
            onClick={(e) => {
              e.stopPropagation();
              changeColor(col);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
