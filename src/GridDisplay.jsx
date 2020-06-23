import React from "react";

function GridDisplay({ grid, numCols, setGrid, color, produce }) {
  return (
    <div>
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
    </div>
  );
}

export default GridDisplay;
