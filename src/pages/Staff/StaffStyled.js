import styled from "styled-components";

export const StaffStyled = styled.section`
  .staff-list {
    .inner-div {
      padding: 2rem 0rem;
      .staff-display {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
        padding: 3rem 0rem;
        margin: 1rem 0rem;
        border-top: 1px solid rgba(${({ theme }) => theme.color.primary}, 0.1);
        border-bottom: 1px solid
          rgba(${({ theme }) => theme.color.primary}, 0.1);
        .card {
          width: 20%;

          .inner-div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 0.5rem;

            .img-box {
              width: 90%;

              img {
                border-radius: 0.5rem;
              }
            }
            p,
            h3 {
              margin: 0;
              text-align: center;
            }

            button {
              padding: 1rem 2rem;
            }
          }
        }
      }
    }
  }
`;
