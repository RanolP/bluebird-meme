import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: none;
  }

  textarea {
    font-family: inherit;
  }

  textarea {
    outline: none;
  }

  #root {
    max-width: 100vw;
    min-height: 100vh;
  }
`;
