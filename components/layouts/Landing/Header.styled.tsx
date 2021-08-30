import css from 'styled-jsx/css';

export const StyledHeader = css`
  .header {
    padding: 20px;
    color: white;
    background-color: #1a9953;

    :global() {
      .header__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        ul {
          list-style: none;
          display: flex;
          padding: 0;
          margin: 0;
        }
      }

      .header__link {
        margin-right: 20px;

        a {
          color: white;
          font-weight: 500;
          text-decoration: none;
          text-transform: uppercase;

          &:hover {
            color: blue;
          }
        }
      }
    }
  }
`;
