import css from 'styled-jsx/css';

export const Page = css.global`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    font: inherit;
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  input,
  textarea,
  select {
    appearance: none;
    font: inherit;
    color: inherit;

    display: block;
    width: 100%;
    border: 0;
    border-radius: 0;
    padding: 0;

    &::placeholder {
      color: inherit;
    }
  }

  figure {
    margin: 0;
  }
`;
