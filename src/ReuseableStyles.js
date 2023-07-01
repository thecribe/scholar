import styled from "styled-components";

export const CenterDiv = styled.div`
  max-width: ${({ theme }) => theme.centerWidth};
  margin: 0 auto;
`;

export const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SectionStyled = styled.section`
  padding: ${({ padding }) => padding};
  background-color: rgb(${({ bg }) => bg});
`;

export const ButtonStyled = styled.button`
  text-transform: uppercase;
  padding: 1rem;
  border: 2px solid
    rgb(
      ${({ type, theme }) =>
        type !== "transparent" ? "0,0,0,0" : theme.color.accent + ",1"}
    );
  background-color: rgba(
    ${({ type, theme }) =>
      type === "transparent" ? "0,0,0,0" : theme.color.accent + ",1"}
  );
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out;
  color: rgb(
    ${({ type, theme }) =>
      type !== "transparent"
        ? theme.color.header_text + ",1"
        : theme.color.accent + ",1"}
  );

  &:hover {
    cursor: pointer;
    color: rgb(
      ${({ type, theme }) =>
        type === "transparent"
          ? theme.color.header_text + ",1"
          : theme.color.accent + ",1"}
    );
    background-color: rgba(
      ${({ type, theme }) =>
        type !== "transparent" ? "0,0,0,0" : theme.color.accent + ",1"}
    );
    border: 2px solid
      rgb(
        ${({ type, theme }) =>
          type === "transparent" ? "0,0,0,0" : theme.color.accent + ",1"}
      );
  }
`;

export const filterArray = (array, searchfield) => {
  let newarr = [];
  if (
    searchfield.faculty === "default" &&
    searchfield.department === "default"
  ) {
    return array;
  } else {
    array.forEach((e) => {
      if (
        searchfield.faculty === e.faculty &&
        searchfield.department === "default"
      ) {
        newarr.push(e);
      } else if (
        searchfield.faculty === e.faculty &&
        searchfield.department === e.department
      ) {
        newarr.push(e);
      }
    });
  }

  return newarr;
};
