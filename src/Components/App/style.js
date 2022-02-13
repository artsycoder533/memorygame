import styled, { createGlobalStyle } from "styled-components";

export const UniversalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
`;