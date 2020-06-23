import React from "react";
import styled from "styled-components";

const GridCont = styled.div`
  display: flex;
  justify-content: center;
`;

function GridDisplay({ grid, numCols, setGrid, color, produce }) {
  return (
    <GridCont>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i} - ${k}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? `${color}` : undefined,
                border: "solid 1px grey",
              }}
            />
          ))
        )}
      </div>
    </GridCont>
  );
}

export default GridDisplay;
