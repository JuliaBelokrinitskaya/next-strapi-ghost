import css from 'styled-jsx/css';

export const StyledButton = css`
  .button {
    padding: 20px;
    color: white;
    background-color: red;
    border: 1px solid red;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const GhostButton = css`
  .button {
    color: red;
    background-color: transparent;
  }
`;
