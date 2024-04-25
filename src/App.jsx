import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Modal from "./components/Modal";

function App() {
  const colorList = [
    "rgb(203, 239, 255)",
    "rgb(26, 100, 252)",
    "rgb(103, 0, 240)",
    "rgb(24, 20, 72)",
  ];
  const [color, setColor] = useState(colorList[0]);
  const [isPickColor, setIsPickColor] = useState(false);

  const handleModalVisible = (state) => {
    setIsPickColor(state);
  };

  const changeColor = (col) => {
    setColor(col);
  };
  return (
    <div className="App" onClick={() => handleModalVisible(false)}>
      <div className="container">
        {/* card */}
        <Card
          color={color}
          isPickColor={isPickColor}
          openModal={handleModalVisible}
        />
        {/* modal */}
        {isPickColor && (
          <Modal
            color={color}
            colorList={colorList}
            changeColor={changeColor}
          />
        )}
      </div>
    </div>
  );
}

export default App;
