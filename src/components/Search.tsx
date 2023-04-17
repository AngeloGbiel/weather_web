import styled from 'styled-components';
import * as Bs from 'react-icons/bs'

interface Props{
    setCity:(city:string)=>void,
    Weather:()=>void
}

export default function Search({setCity,Weather}:Props) {
    const Enter = (key:React.KeyboardEvent<HTMLDivElement>)=>{
        if(key.key=='Enter'){
            Weather()
        }
    }
    return (
        <SearchStyled>
            <input onKeyDown={(key)=>Enter(key)} onChange={(e)=>setCity(e.target.value)} type='text' placeholder='Search area' id='search'/>
            <label htmlFor='search'>
                <Bs.BsSearch/>
            </label>
        </SearchStyled>
    )
}
const SearchStyled = styled.div`
    position: absolute;
    margin: 20px 10px 10px 30px;
    width: 30%;
    display: flex;
    align-items: center;
    input{
        background-color: transparent;
        outline: none;
        border: none;
        border-bottom: 1px solid white;
        width: 100%;
        padding: 10px;
        font-size: .9rem;
        color: white;
    }
    input::placeholder{
        color: #ffffffac;
        font-size: .9rem;
    }
    label{
        color: white;
        font-size: large;
        display:flex;
        align-items: flex-end;
        padding-left: 5px;
    }
`
