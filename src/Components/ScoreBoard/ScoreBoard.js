import React from "react";
import { StyledBoard } from "./style";
import { Score } from "./style";

function ScoreBoard({currentScore, bestScore}) {
  return (
    <StyledBoard>
      <p>
        Current Score: <Score>{currentScore}</Score>
      </p>
      <p>
        Best Score: <Score>{bestScore}</Score>
          </p>
      <button>Reset Game</button>
    </StyledBoard>
  );
}

export default ScoreBoard;
