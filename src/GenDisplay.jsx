import React from "react";
import styled from "styled-components";

const GenTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const SubHeaderSize = styled.h3`
  font-size: 1.5rem;
`;

function GenDisplay({ genCount }) {
  return (
    <GenTitle>
      <SubHeaderSize>{`Generation No. : ${genCount}`}</SubHeaderSize>
    </GenTitle>
  );
}

export default GenDisplay;
