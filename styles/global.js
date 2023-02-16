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

    a {
      color: inherit;
      text-decoration: none;
      line-height: 1.5;
    }

    p {
      line-height: 1.5;
    }

    .table-container {
      display: block;
      width: 100%;
    }

    .flag-icon {
      margin-right: 0.1em;
    }

    .flex-table {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }

    .header {
      border-bottom: 0.5px solid rgb(60, 60, 60);
      font-weight: bold;
    }

    .row {
      border-bottom: 0.5px solid rgb(60, 60, 60);
    }

    .flex-row {
      width: calc(100% / 4);
      text-align: start;
      padding: 0.75rem 0.75rem 0.75rem 0;

      &:first-of-type {
        width: 10%;
      }

      &:nth-of-type(2) {
        width: 25%;
      }

      &:nth-of-type(3) {
        width: 40%;
      }

      &:nth-of-type(4) {
        width: 10%;
      }
    }

    .rowspan {
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
      justify-content: center;
    }

    .column {
      display: flex;
      flex-flow: column wrap;
      width: 75%;
      padding: 0;

      .flex-row {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        padding: 0;
        border: 0;
        border-bottom: solid 1px #eaeaea;
      }
    }

    .flex-cell {
      width: calc(100% / 3);
      text-align: start;
      padding: 0.5em 0.5em;
    }
`;
