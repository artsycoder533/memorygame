import React from "react";
import { StyledBoard, Score, StyledButton } from "./style";

function ScoreBoard({ currentScore, bestScore, startNewGame }) {
  
  function handleResetGame() {
    startNewGame();
  }

  return (
    <StyledBoard>
      <p>
        Current Score: <Score>{currentScore}</Score>
      </p>
      <p>
        Best Score: <Score>{bestScore}</Score>
          </p>
      <StyledButton onClick={handleResetGame}>Reset Game</StyledButton>
    </StyledBoard>
  );
}

export default ScoreBoard;
