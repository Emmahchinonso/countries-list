import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --body-background: ${({theme}) => theme.bodyBackground};
    --text-color: ${({theme}) => theme.text};
    --input-color: ${({theme}) => theme.input};
    --elements-background: ${({theme}) => theme.elementBackground};
    --shadow: ${({theme}) => theme.shadow};
    }

  body,html {
    font-family: 'Nunito Sans', sans-serif; 
    background: var(--body-background);
    color: var(--text-color);
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
