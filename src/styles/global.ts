import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body { 
        background-color: #FFFFFF;
        font: 400 16px Roboto, sans-serif;
        color: ${(props) => props.theme.colors.blue};

       
    }

    h1, h2, h3, h4, h5, h6 {
        padding: 0;
        margin: 0;
    }

    li {
        list-style: none;
    }

`

export default GlobalStyles
