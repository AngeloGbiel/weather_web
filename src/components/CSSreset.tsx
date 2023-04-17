import { createGlobalStyle } from "styled-components";

interface Props{
    photoCity:string
}

export const CSSreset = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Inter', sans-serif;
    }
    body{
        background:no-repeat left 0px top 15% url("fundo.png");
        background-size: 100%;
        /* background-repeat:no-repeat; */
        /* background-position:0px 15%; */
    }
`