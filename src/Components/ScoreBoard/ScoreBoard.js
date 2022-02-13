import React from "react";
import { StyledBoard } from "./style";
import { StyledParagraph } from "./style";
import { Score } from "./style";

function ScoreBoard(props) {
  return (
    <StyledBoard>
      <StyledParagraph>Current Score: <Score>{props.currentScore}</Score></StyledParagraph>
          <StyledParagraph>Best Score: <Score>{props.bestScore}</Score></StyledParagraph>
    </StyledBoard>
  );
}

export default ScoreBoard;
