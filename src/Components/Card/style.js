import styled from "styled-components";

export const StyledCard = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    transform: translateY(-15px);
    transition: all 0.4ms ease;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  margin: 0;
`;
