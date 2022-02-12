import React from "react";
import { StyledHeader, Title } from "./style";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

function Header(props) {
    return (
      <StyledHeader>
            <Title>Test your memory!</Title>
            <ScoreBoard></ScoreBoard>
      </StyledHeader>
    );
}

export default Header;