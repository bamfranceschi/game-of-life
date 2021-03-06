import React from "react";
import styled from "styled-components";

const OutsideCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-top: 1px dashed white;
`;

const Heading = styled.h2`
  align-self: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const ThreeColDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  margin-right: 3rem;
  width: 33%;
`;

const Footer = styled.p`
    font-size = 1.2rem;
    align-self: center;
`;

const ALink = styled.a`
  color: white;
`;

const SubHeaderSize = styled.h3`
  font-size: 1.5rem;
`;

const ParaSize = styled.p`
  font-size: 1.2rem;
`;

function Rules() {
  return (
    <OutsideCont>
      <ParentDiv>
        <Heading>About the Game of Life</Heading>
        <ThreeColDiv>
          <Col>
            <SubHeaderSize>Rules</SubHeaderSize>
            <ParaSize>
              The Game of Life is an infinite, two-dimensional grid of square
              cells, each of which is in one of two possible states, live or
              dead. Each cell interacts with its eight neighbors, which are the
              cells that are horizontally, vertically, or diagonally adjacent.
            </ParaSize>
            <ParaSize>
              At each step in time, the following transitions occur:
            </ParaSize>
            <ul>
              <li>
                Any live cell with fewer than two live neighbours dies, as if by
                underpopulation.{" "}
              </li>
              <li>
                Any live cell with two or three live neighbours lives on to the
                next generation.{" "}
              </li>
              <li>
                Any live cell with more than three live neighbours dies, as if
                by overpopulation.{" "}
              </li>
              <li>
                Any dead cell with exactly three live neighbours becomes a live
                cell, as if by reproduction.{" "}
              </li>
            </ul>
            <ParaSize>
              The first generation is created by applying the above rules, and
              the rules are applied repeatedly to create further generations.
            </ParaSize>
          </Col>
          <Col>
            <SubHeaderSize>History</SubHeaderSize>
            <ParaSize>
              The Game of Life, also known simply as Life, is a cellular
              automaton devised by the British mathematician John Horton Conway
              in 1970. It is a zero-player game, meaning that its evolution is
              determined by its initial state, requiring no further input.
            </ParaSize>
            <ParaSize>
              The game made its first public appearance in the October 1970
              issue of Scientific American. Since its publication, the Game of
              Life has attracted much interest because of the surprising ways in
              which the patterns can evolve.
            </ParaSize>
            <ParaSize>
              Scholars in various fields, such as computer science, physics,
              biology, biochemistry, economics, mathematics, philosophy, and
              generative sciences, have made use of the way that complex
              patterns can emerge from the implementation of the game's simple
              rules.
            </ParaSize>
          </Col>
          <Col>
            <SubHeaderSize>Turing Completeness</SubHeaderSize>
            <ParaSize>
              The concept is named after English mathematician and computer
              scientist Alan Turing. In computability theory, a system of
              data-manipulation rules (such as a computer's instruction set, a
              programming language, or a cellular automaton) is said to be
              Turing-complete or computationally universal if it can be used to
              simulate any Turing machine.
            </ParaSize>
            <ParaSize>
              This means that this system is able to recognize or decide other
              data-manipulation rule sets. Turing completeness is used as a way
              to express the power of such a data-manipulation rule set.
            </ParaSize>
          </Col>
        </ThreeColDiv>
        <Footer>
          Sources:{" "}
          <ALink href={"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"}>
            Wiki: Conway's Game of Life
          </ALink>
          ,{" "}
          <ALink href={"https://en.wikipedia.org/wiki/Turing_completeness"}>
            Wiki: Turing Completeness
          </ALink>
        </Footer>
      </ParentDiv>
    </OutsideCont>
  );
}

export default Rules;
