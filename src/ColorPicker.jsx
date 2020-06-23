import React from "react";
import { CirclePicker } from "react-color";

function ColorPicker({ color, setColor }) {
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return <CirclePicker color={color} onChangeComplete={handleChangeComplete} />;
}

export default ColorPicker;
