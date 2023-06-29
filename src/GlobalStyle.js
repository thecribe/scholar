import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-family: sans-serif, Verdana, Geneva, Tahoma;
        font-weight: 400;
        box-sizing: border-box;
        background-color: rgb(${({ theme }) => theme.color.bg});
        font-size: 1rem;
        color: rgb(${({ theme }) => theme.color.text});
    }

    .link{
        color: rgb(${({ theme }) => theme.color.text});
        text-decoration: none;
    }

    h1,h2,h3,h4,h5, p{
        margin: 1rem 0rem;
    }

`;

export default GlobalStyle;
