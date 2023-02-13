import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
        --turquoise: #00efe1;
        --mid-turquoise: #14d5c9;
        --dark-turquoise: #00333f;
        --black: #030416;
        --white: #f1f1f1;
        --grey: #d6e2e7;
        --dark-grey: #7f8a8e;
        --yellow: #f9c51a;
        --orange: #ff5c00;
        --fuschia: #e80352;
        --blue: #338fff;
        --blue-dark: #145cb3;
        --purple: #cda2ff;
        --green: #00ef7c;
        --color: ${props => props.theme.color};
        --background: ${props => props.theme.backgroundColor};
        --primary: ${props => props.theme.primary};
      }

      /* layout */
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Fira Code", monospace;
        font-size: 16px;
        color: var(--color);
        background-color: var(--background);
      }

      section {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `;

export default GlobalStyle;