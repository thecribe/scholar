import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: rgb(${({ theme }) => theme.color.primary});
  color: rgb(${({ theme }) => theme.color.header_text});
  padding-top: 4rem;
  margin: 0;

  .inner-div {
    padding: 0rem 1rem;
    .footer-text {
      padding: 3rem 0rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      border-bottom: 1px solid
        rgba(${({ theme }) => theme.color.header_text}, 0.1);

      p {
        color: rgb(${({ theme }) => theme.color.header_text});
      }

      .about {
        flex: 1;
        text-align: justify;
        .about-img {
          width: 70px;
        }
      }
      .widget-box {
        flex: 2;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10rem;

        .widget {
          h3 {
            margin-bottom: 1rem;
          }
        }
      }
    }

    .copyright {
      padding: 1rem 0rem;
      text-align: center;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    .inner-div {
      .footer-text {
        display: block;
        .about {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .widget-box {
          margin-top: 1rem;
          justify-content: space-between;
          gap: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    .inner-div {
      .footer-text {
        .about {
          display: block;
        }

        .widget-box {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }
      }
    }
  }
`;
