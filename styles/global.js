import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
      box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
      background: #000;
      color: #b3b3b3;
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      scrollbar-gutter: stable;
      -moz-osx-font-smoothing: grayscale;
      min-height: 100vh;
    }

`;
