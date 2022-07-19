import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,body {
  min-height: 100%;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
    min-height: 100vh;
    max-height: fit-content;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
}
button {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
}

/* Create a Custome Scrollbar */
::-webkit-scrollbar {
    background-color: transparent;
    width: 15px;
}

::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);;
}
`;

export default GlobalStyles;
