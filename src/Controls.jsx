import React from "react";
import ColorPicker from "./ColorPicker";

function Controls({
  setRunning,
  running,
  runningRef,
  runSimulation,
  setGrid,
  setGenCount,
  generateEmptyGrid,
  numRows,
  numCols,
  color,
  setColor,
  speed,
  changeInt,
  changeRows,
  changeCols,
  nRows,
  nCols,
}) {
  return (
    <div>
      <button
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? "stop" : "start"}
      </button>
      <button
        onClick={() => {
          setGrid(generateEmptyGrid);
          setGenCount(0);
        }}
      >
        clear
      </button>
      <button
        onClick={() => {
          const rows = [];
          for (let i = 0; i < numRows; i++) {
            rows.push(
              Array.from(Array(numCols), () => (Math.random() > 0.8 ? 1 : 0))
            );
          }
          setGrid(rows);
        }}
      >
        random
      </button>
      <ColorPicker color={color} setColor={setColor} />
      <h3>Speed</h3>
      <input
        type="range"
        min="0"
        max="1000"
        value={speed}
        onChange={changeInt}
        title={`${speed}`}
      />
    </div>
  );
}

export default Controls;
