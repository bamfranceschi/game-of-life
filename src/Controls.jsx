import React from "react";
import ColorPicker from "./ColorPicker";
import styled from "styled-components";

const ParentCont = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BControl = styled.button`
  margin: 2rem;
  padding: 1rem;
  border-radius: 10%;
`;

const ColorCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SpeedCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
}) {
  return (
    <ParentCont>
      <ColorCont>
        <h3>Choose a color</h3>
        <ColorPicker color={color} setColor={setColor} />
      </ColorCont>
      <ButtonCont>
        <BControl
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            }
          }}
        >
          {running ? "stop" : "start"}
        </BControl>
        <BControl
          onClick={() => {
            setGrid(generateEmptyGrid);
            setGenCount(0);
          }}
        >
          clear
        </BControl>
        <BControl
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
        </BControl>
      </ButtonCont>
      <SpeedCont>
        <h3>Speed</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={speed}
          onChange={changeInt}
          title={`${speed}`}
        />
      </SpeedCont>
    </ParentCont>
  );
}

export default Controls;
