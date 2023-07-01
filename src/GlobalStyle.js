import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: sans-serif, Verdana, Geneva, Tahoma;
        
        
        background-color: rgb(${({ theme }) => theme.color.bg});
        font-size: 1rem;
        color: rgb(${({ theme }) => theme.color.text});
    }

    .link{
        color: rgb(${({ theme }) => theme.color.text});
        text-decoration: none;
    }

    .active{
        color: rgb(${({ theme }) => theme.color.accent}) !important;
    }

    h1,h2,h3,h4,h5, p{
        margin: 1rem 0rem;
        font-weight: 300;
        line-height: 1.5;
    }

    .section-header-text{
        color: rgb(${({ theme }) => theme.color.accent}) ;
        text-transform: uppercase;
    }

    

`;

export default GlobalStyle;
