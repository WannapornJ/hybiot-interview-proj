import React from "react";

const Modal = ({ colorList, color, changeColor }) => {
  return (
    <div className="modal --shadow">
      <p>Select Color:</p>
      <div className="color-picker">
        {colorList.map((col) => (
          <div
            className="color-picker__list"
			key={col}
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
