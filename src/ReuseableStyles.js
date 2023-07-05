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

export const ConfigurationStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(${({ theme }) => theme.color.primary}, 0.1);
  .inner-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .totalCard {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex: 1;
      .action {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        input {
          outline: none;
          border: none;
          padding: 1rem 0.3rem;
          width: 200px;
        }

        font-size: 1rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

        .icon {
          margin-left: 1rem;
          background-color: rgb(${({ theme }) => theme.color.accent});
          height: 100%;
          padding: 0.3rem 0.3rem;
          margin: 0.7rem;
          color: rgb(${({ theme }) => theme.color.header_text});
          box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px inset;
          transition: all 0.5s ease-in-out;

          &:hover {
            cursor: pointer;
            transform: scale(1.03);
          }
        }
      }
    }
  }
`;
