import styled from "styled-components";

export const HomepageStyled = styled.section`
  .header-box {
    width: 70%;
    text-align: center;
    .header-text {
      font-size: 3rem;
      line-height: 1.2;
    }
  }

  .about {
    text-align: center;

    .inner-div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .content-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 5rem;
      gap: 1rem;

      padding: 0rem 2rem;

      .card:nth-child(2) {
        transform: translateY(-10%);
      }
    }
  }

  .staff,
  .research {
    background-image: linear-gradient(
        to right,
        rgba(${({ theme }) => theme.color.primary}, 1),
        rgba(${({ theme }) => theme.color.primary}, 0.9)
      ),
      url("./bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    clip-path: polygon(100% 0, 100% 85%, 0 100%, 0 15%);

    .inner-div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      padding: 4rem 2rem;

      .header-box {
        text-align: left;
        width: 600px;

        .header-text,
        p {
          color: rgb(${({ theme }) => theme.color.header_text});
          margin-bottom: 1.5rem;
        }
      }

      .img-box {
        width: 600px;
      }
    }
  }
  .student {
    .inner-div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      padding: 4rem 2rem;
      flex-direction: row-reverse;

      .header-box {
        text-align: left;
        width: 600px;
        padding-left: 2rem;

        .header-text,
        p {
          /* color: rgb(${({ theme }) => theme.color.header_text}); */
          margin-bottom: 1.5rem;
        }
      }

      .img-box {
        width: 600px;
      }
    }
  }

  .latestblog {
    /* text-align: center; */

    .inner-div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .content-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 0rem 1rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    .about {
      .content-box {
        flex-direction: column;

        .card:nth-child(2) {
          transform: translateY(0%);
        }
      }
    }

    .latestblog {
      .content-box {
        flex-direction: column;
      }
    }

    .staff,
    .research,
    .student {
      .img-box {
        display: none;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.tablet}) {
    .about {
      .content-box {
        flex-direction: column;
        display: none;

        .card {
          width: 500px;
        }

        .card:nth-child(2) {
          transform: translateY(0%);
        }
      }
    }
    .latestblog {
      .content-box {
        flex-direction: column;
      }
    }
  }
`;
