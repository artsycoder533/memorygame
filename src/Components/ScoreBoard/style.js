import styled from "styled-components";

export const StyledBoard = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  align-items: center;
  text-align: center;
`;

export const Score = styled.span`
    color: blue;
    font-size: 1.5rem;
    width: 100%;
    display: block;
`;

export const StyledButton = styled.button`
  border: 1px solid transparent;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  background: blue;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    transform: translateY(-5px);
  }
`;
