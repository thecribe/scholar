import styled from "styled-components";

export const CardStyle = styled.div`
  width: ${({ dimension }) => dimension.width};
  height: ${({ dimension }) => dimension.height};
  background-color: rgb(${({ bg }) => bg});
  border-radius: 1rem;
`;
