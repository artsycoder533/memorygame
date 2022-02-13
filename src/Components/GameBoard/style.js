import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: black;
`;

export const Board = styled.section`
    max-width: 600px;
    width: 90vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
`;

