import React from "react";
import { StyledBoard } from "./style";

function ScoreBoard(props) {
  return (
    <StyledBoard>
      <p>Current Score: </p>
      <p>Best Score: </p>
    </StyledBoard>
  );
}

export default ScoreBoard;
