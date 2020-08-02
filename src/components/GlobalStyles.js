import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --body-background: hsl(0, 0%, 98%);
    --text-color: hsl(200, 15%, 8%);
    --input-color: hsl(0, 0%, 52%);
    --elements-background: hsl(0, 0%, 100%);
    --shadow: hsl(0, 0%, 90%)
    }

  body,html {
    font-family: 'Nunito Sans', sans-serif; 
    background: var(--body-background);
  }

  * {
    font-family: inherit;
    box-sizing: border-box;
    color: inherit;
    margin: 0;
    padding: 0;
  }
  
  @keyframes sk-bounce {
    0%, 100% { 
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% { 
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
`;
export default GlobalStyle;
