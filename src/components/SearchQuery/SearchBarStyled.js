import styled from "styled-components";

export const SearchBarStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0rem 2rem;

  p {
    margin: 0;
  }
  .input-box {
    flex: 1;

    P {
      margin-bottom: 0.5rem;
    }
    .input {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(${({ theme }) => theme.color.secondary});
      padding: 1rem;
      position: relative;
      border-radius: 0.3rem;

      .dropdown {
        position: absolute;
        top: 100%;
        background-color: rgb(${({ theme }) => theme.color.secondary});
        width: 100%;
        left: 0;
        display: none;
        max-height: 500px;
        overflow-y: scroll;

        p {
          padding: 1rem 2rem;
          transition: all 0.5s ease-in-out;

          &:hover {
            background-color: rgb(${({ theme }) => theme.color.primary});
            cursor: pointer;
          }
        }
      }

      .icons {
        font-size: 1.5rem;

        &:hover {
          cursor: pointer;
        }
      }

      &:hover {
        cursor: pointer;
        .dropdown {
          display: block;
        }
      }
    }
  }

  .search-btn {
    padding: 1rem 2rem;
  }
`;
