import { Theme, css } from '@emotion/react'

export const reset = (theme: Theme) => css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  // TODO: 프로젝트에 맞게 색상을 대입하고, 추가 CSS 속성을 추가.
  body {
    background-color: ${theme.color.white};
  }

  a,
  button,
  svg {
    cursor: pointer;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    outline: none;
  }

  ol,
  ul,
  li {
    list-style: none;
  }
`
