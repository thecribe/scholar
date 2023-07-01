import styled from "styled-components";

export const SliderStyle = styled.div`
  /* height: 70vh; */
  background-image: linear-gradient(
      to right,
      rgba(${({ theme }) => theme.color.primary}, 0.8),
      rgba(${({ theme }) => theme.color.primary}, 0.8)
    ),
    url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 10rem 0rem;

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 0rem 5rem;
    color: rgb(${({ theme }) => theme.color.header_text});

    .slider-text {
      width: 600px;
      .header-text {
        font-size: 2rem;
      }
    }

    .slider-image {
      /* height: 40%; */
      width: 500px;

      img {
        border-radius: 1rem;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    padding: 4rem 0rem;
    .container {
      padding: 0rem 2rem;
      .slider-text {
        width: 100%;
      }
      .slider-image {
        display: none;
      }
    }
  }
`;
