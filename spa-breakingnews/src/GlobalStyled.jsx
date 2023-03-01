import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}

html {
  width: auto;
}

body {
  max-width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  padding-top: 100px;
}

`;


