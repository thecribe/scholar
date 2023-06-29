import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: rgb(${({ theme }) => theme.color.primary});
  color: rgb(${({ theme }) => theme.color.bg});
  padding: 1rem 0;

  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .site-logo {
      /* flex: 1; */
      width: 70px;
    }

    .nav-links {
      flex: 5;
    }
    .header-extras {
      flex: 1;

      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 2rem;

      .site-settings {
        p {
          border: 1px solid transparent;
          padding: 0.3rem 1rem;
          border-radius: 1rem;
          transition: all 0.5s ease-in-out;
          #hidden-text {
            margin-left: 1rem;
            display: none;
          }

          &:hover {
            border: 1px solid rgb(${({ theme }) => theme.color.header_text});
            cursor: pointer;
            #hidden-text {
              display: inline;
            }
          }
        }
      }
      .hamburger {
        display: none;
        .icons {
          font-size: 2rem;
          transition: all 0.5s ease-in-out;

          &:hover {
            cursor: pointer;
            transform: scale(1.06);
          }
        }
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    .nav-bar {
      padding: 0rem 1rem;
      .nav-links {
        display: none;
      }

      .header-extras {
        .hamburger {
          display: block;
        }
      }
    }
  }
`;
