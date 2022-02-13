import React from "react";
import { StyledFooter, StyledLink } from "./style";

function Footer() {
  return (
    <StyledFooter>
      <small>
        Made by:{" "}
        <a href="www.natashajohnson.dev" target="_blank">
          Natasha Johnson
        </a>{" "}
      </small>
      <small>
        Images courtesy of:{" "}
        <StyledLink href="https://randomuser.me/photos" target="_blank">
          Random User Generator
        </StyledLink>{" "}
      </small>
    </StyledFooter>
  );
}

export default Footer;
