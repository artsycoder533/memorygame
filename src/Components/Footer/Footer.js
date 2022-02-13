import React from 'react';
import { StyledFooter } from './style';

function Footer() {
  return (
    <StyledFooter>
      <small>
        Made by:
        <a href="www.natashajohnson.dev" target="_blank"></a> Natasha Johnson{" "}
      </small>
      <small>
        Images courtesy of
        <a href="https://randomuser.me/photos" target="_blank"></a>{" "}
      </small>
    </StyledFooter>
  );
}

export default Footer