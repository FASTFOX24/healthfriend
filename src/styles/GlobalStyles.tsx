import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    a {
        cursor: pointer
    }
    input {
        border: 1px solid #d1d1d1;
        border-radius: 99px;
        &:focus {
            outline-color: #ff6300;
        }
    }
`;

export default GlobalStyles;
