import React from "react";
import ColorPicker from "./ColorPicker";
import styled from "styled-components";

const OutsideCont = styled.div`
  display: flex;
  justify-content: center;
`;

const ParentCont = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
  align-items: flex-start;
`;

const ButtonCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
`;

const BControl = styled.button`
  margin: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  border-radius: 15%;
  background-color: white;
  border: none;
`;

const ColorCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
`;

const SpeedCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
`;

const SubHeaderSize = styled.h3`
  font-size: 1.5rem;
`;

const SubSubSize = styled.h4`
  font-size: 1.2rem;
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
    <OutsideCont>
      <ParentCont>
        <ColorCont>
          <SubHeaderSize>Choose a color</SubHeaderSize>
          <ColorPicker color={color} setColor={setColor} />
        </ColorCont>
        <ButtonCont>
          <div>
            <SubHeaderSize>Game Controls</SubHeaderSize>
          </div>
          <div>
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
                    Array.from(Array(numCols), () =>
                      Math.random() > 0.8 ? 1 : 0
                    )
                  );
                }
                setGrid(rows);
              }}
            >
              random
            </BControl>
          </div>
        </ButtonCont>
        <SpeedCont>
          <SubHeaderSize>Speed</SubHeaderSize>
          <SubSubSize>Fast --{">"} Slow</SubSubSize>
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
    </OutsideCont>
  );
}

export default Controls;
