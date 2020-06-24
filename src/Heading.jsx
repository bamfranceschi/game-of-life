import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderSize = styled.h1`
  font-size: 3rem;
`;

const SubHeaderSize = styled.h3`
  font-size: 1.5rem;
`;

function Heading() {
  return (
    <StyledDiv>
      <HeaderSize>Conway's Game of Life</HeaderSize>
      <SubHeaderSize>John Horton Conway's Cellular Automaton</SubHeaderSize>
    </StyledDiv>
  );
}

export default Heading;
