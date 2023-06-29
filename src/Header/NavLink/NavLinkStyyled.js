import styled from "styled-components";

export const NavLinkStyled = styled.nav`
  .link {
    color: rgb(${({ theme }) => theme.color.header_text});
    padding: 1rem;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: rgb(${({ theme }) => theme.color.accent});
      border-radius: 0.2em;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    li {
      position: relative;
      list-style: none;

      .dropdown {
        position: absolute;
        display: none;
        top: 20px;
        background-color: rgb(${({ theme }) => theme.color.secondary});
        width: 200px;
        padding: 1rem 0.5rem;
        border-radius: 3px;

        li {
          padding: 0.5rem 1rem;
          &:not(:last-child) {
            margin-bottom: 1rem;
          }
        }
      }

      &:hover {
        .dropdown {
          display: block;
        }
      }
    }
  }
`;
