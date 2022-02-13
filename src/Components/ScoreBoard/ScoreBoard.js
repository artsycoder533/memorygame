import React from "react";
import { StyledBoard, Score, StyledButton } from "./style";

function ScoreBoard({currentScore, bestScore}) {
  return (
    <StyledBoard>
      <p>
        Current Score: <Score>{currentScore}</Score>
      </p>
      <p>
        Best Score: <Score>{bestScore}</Score>
          </p>
      <StyledButton>Reset Game</StyledButton>
    </StyledBoard>
  );
}

export default ScoreBoard;
