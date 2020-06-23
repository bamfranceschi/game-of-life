import React from "react";
import styled from "styled-components";

const GenTitle = styled.div`
  display: flex;
  justify-content: center;
`;

function GenDisplay({ genCount }) {
  return (
    <GenTitle>
      <h3>{`# of Generations: ${genCount}`}</h3>
    </GenTitle>
  );
}

export default GenDisplay;
