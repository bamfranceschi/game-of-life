import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import Heading from "./Heading";
import GenDisplay from "./GenDisplay";
import Controls from "./Controls";
import GridDisplay from "./GridDisplay";
import Rules from "./Rules";

function App() {
  //defines the shape of the grid/2D array
  const numRows = 40;
  const numCols = 60;

  //defines the neighbor "coordinates"
  const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
  ];

  //function that creates an empty grid as defined by numRows and numCols, with each cell dead to start. Initial state before user interaction.
  const generateEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  };

  //Slices of state
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid();
  });
  const [running, setRunning] = useState(false);
  const [genCount, setGenCount] = useState(0);
  const [color, setColor] = useState("#4caf50");
  const [speed, setSpeed] = useState(100);

  const generationCount = 0;

  //Refs
  const generationCountRef = useRef(generationCount);
  generationCountRef.current = generationCount;

  const runningRef = useRef(running);
  runningRef.current = running;

  //Handle change for speed
  const changeInt = (e) => {
    setSpeed(Number(e.target.value));
  };

  //function that runs the simulation
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    //increments the generation count for each simulation
    setGenCount((genCount) => (genCount += 1));

    //simulate
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            //loops through all possible neighbors and evaulates how many are "alive"
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              //handles edges, state changes if it passes this edge test
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });
            //death condition
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
              //regeneration condition
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, speed);
  }, [speed, numCols, numRows, operations]);

  return (
    <>
      <Heading />
      <GridDisplay
        grid={grid}
        numCols={numCols}
        setGrid={setGrid}
        color={color}
        produce={produce}
      />
      <GenDisplay genCount={genCount} />
      <Controls
        running={running}
        setRunning={setRunning}
        runningRef={runningRef}
        runSimulation={runSimulation}
        setGrid={setGrid}
        setGenCount={setGenCount}
        generateEmptyGrid={generateEmptyGrid}
        numRows={numRows}
        numCols={numCols}
        color={color}
        setColor={setColor}
        speed={speed}
        changeInt={changeInt}
      />
      <Rules />
    </>
  );
}

export default App;
