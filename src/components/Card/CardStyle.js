import styled from "styled-components";

export const CardStyle = styled.div`
  width: ${({ dimension }) => dimension.width};
  height: ${({ dimension }) => dimension.height};
  background-color: rgb(${({ bg }) => bg});
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: ${({ padding }) => padding};
`;
