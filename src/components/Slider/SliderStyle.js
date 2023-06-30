import styled from "styled-components";

export const SliderStyle = styled.div`
  height: 70vh;
  background-image: linear-gradient(
      to right,
      rgba(${({ theme }) => theme.color.primary}, 0.8),
      rgba(${({ theme }) => theme.color.primary}, 0.8)
    ),
    url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

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
      height: 500px;
      width: 400px;

      img {
        border-radius: 1rem;
      }
    }
  }
`;
