import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Jost", sans-serif;
        list-style-type: none;
        text-decoration: none;
    }

    :root {
        --main-color: #e52d2d;
        --second-color: #e41411;
        --text-color: #000;
    }

    #root {
        min-height: 100vh;
    }

`