import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    // Used to reset the default layout.
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, input, button {
        font-family: 'Roboto', sans-serif;

    }
`;
