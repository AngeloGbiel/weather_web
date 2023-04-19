import { createGlobalStyle } from "styled-components";

interface Props {
    photoCity: string
}

export const CSSreset = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Inter', sans-serif;
    }
    body{
        background: #278AFF;
    }
`