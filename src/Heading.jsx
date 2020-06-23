import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Heading() {
  return (
    <StyledDiv>
      <h1>Conway's Game of Life</h1>
      <h3>John Horton Conway's Cellular Automaton</h3>
    </StyledDiv>
  );
}

export default Heading;
