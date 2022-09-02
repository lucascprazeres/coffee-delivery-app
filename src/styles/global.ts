import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --base-title: #272221;
    --base-subtitle: #403937;
    --base-text: #574F4D;
    --base-label: #8D8686;
    --base-hover: #D7D5D5;
    --base-button: #E6E5E5;
    --base-input: #EDEDED;
    --base-card: #F3F2F2;
    --background: #FAFAFA;

    --white: #FFF;

    --purple-dark: #4B2995;
    --purple: #8047F8;
    --purple-light: #EBE5F9;

    --yellow-dark: #C47F17;
    --yellow: #DBAC2C;
    --yellow-light: #F1E9C9;
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5 {
    color: var(--base-title);
    font-family: 'Baloo 2', cursive;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    color: var(--base-text);
  }

  ul {
    list-style: none;
  }
`
