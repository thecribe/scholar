import styled from "styled-components";

export const CenterDiv = styled.div`
  max-width: ${({ theme }) => theme.centerWidth};
  margin: 0 auto;
`;

export const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
`;

export const SectionStyled = styled.section`
  padding: ${({ padding }) => padding};
  background-color: red;
  height: 50%;
`;
