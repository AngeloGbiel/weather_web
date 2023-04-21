import { createGlobalStyle } from "styled-components";
interface Props{
    theme:{
        photo:string
    }
}
export const CSSreset = createGlobalStyle<Props>`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Inter', sans-serif;
    }
    body{
        background-image: url(${({theme})=>theme.photo});
        background-repeat: no-repeat;
        background-size: cover;
        transition: 1s;
        background-attachment:fixed;
        @media (max-width:500px){
            background: #278AFF;
        }
        background-position: center;
    }
`
