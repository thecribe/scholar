import styled from "styled-components";

export const CoverStyled = styled.section`
  padding: 5rem 0rem;
  background-image: linear-gradient(
      to right,
      rgba(${({ theme }) => theme.color.primary}, 1),
      rgba(${({ theme }) => theme.color.primary}, 0.9)
    ),
    url("./bg.jpg");
  background-size: cover;
  background-position: center center;
  color: rgb(${({ theme }) => theme.color.header_text});
`;
