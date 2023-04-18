import React, { useState } from 'react'
import styled from 'styled-components'
import { Data } from './config'
import * as Bs from 'react-icons/bs'
import * as Ri from 'react-icons/ri'

interface Props {
    weather: {
        main: { temp: number, humidity: number, feels_like: number },
        name: string,
        weather: { [key: number]: { description: string, main: string } },
        visibility: number,
        wind: { speed: number },
        timezone: number
    } | '',
    time: string,
    date: string
    setCity: (city: string) => void,
    Weather: () => void
}


export default function DataWeather({ weather, time, date, setCity, Weather }: Props) {
    const Enter = (key: React.KeyboardEvent<HTMLDivElement>) => {
        if (key.key == 'Enter') {
            Weather()
        }
    }
    const Search = () =>{
        Weather()
    }
    return (
        <ContainerStyled>
            <div className='search'>
                <input onKeyDown={(key) => Enter(key)} onChange={(e) => setCity(e.target.value)} type='text' placeholder='Search area' id='search' />
                <label htmlFor='search'>
                    <Bs.BsSearch onClick={Search} />
                </label>
            </div>
            {weather ? <div className='dataweathercontainer'>
                <div className='main'>
                    <h1 className='temp'>{Math.round(weather.main.temp)}°</h1>
                    <div className='nameDate'>
                        <h2 className='name'>{weather.name}</h2>
                        <p className='date'>{time} - {date}</p>
                    </div>
                </div>
                <div className='dataWeather'>
                    <div className='weather'>
                        <span>{
                            weather.weather[0].main == "Clear" ?
                                <Ri.RiSunLine /> : weather.weather[0].main == "Clouds" ?
                                    <Bs.BsCloudSunFill /> : weather.weather[0].main == "Rain" ?
                                        <Bs.BsFillCloudRainFill /> : null
                        }</span>
                        <p>{weather.weather[0].description}</p>
                    </div>
                    <div className='DataWeatherfirst'>
                        <p>Feels Like: {Math.round(weather.main.feels_like)}°C</p>
                        <p>|</p>
                        <p>humidity: {weather.main.humidity}%</p>
                    </div>
                    <div className='DataWeathersecond'>
                        <p>Visibility: {(weather.visibility / 1000).toFixed(1)}km</p> {/*Deixar o valor como 10.0 (cada valor passado dentro do "toFixed" é q quantidade de números depois da vírgula) */}
                        <p>|</p>
                        <p>Wind: {(weather.wind.speed).toFixed(1)}m/s</p>
                    </div>
                </div>
            </div> : null}
        </ContainerStyled>
    )
}
const ContainerStyled = styled.div`
    .search{
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
    }
    .dataweathercontainer{
        position: absolute;
        bottom: 15%;
        left:5%;
        color: white;
        .main{
            display: flex;
            gap: 10%;
            align-items: center;
        }
        .main .temp{
            font-size: 5rem;
        }
        .main .name{
            font-size: 4rem;
            width: 150%;
            margin-bottom: -10px;
            font-weight: 300;
        }
        .main .date{
            margin-left: 10px;
            font-size: .8em;
            width: 150%;
        }
        .weather{
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .weather span{
            display: flex;
            align-items: center;
            font-size: 2rem;
        }
        .dataWeather{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .DataWeatherfirst, .DataWeathersecond{
            display: flex;
            gap: 5%;
        }
    }
    @media(max-width:600px){
        background: linear-gradient(270deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%);
        box-shadow: 2px 2px 13px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(34px);
        position: absolute;
        width: 85%;
        height: 70%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 10px;
        .search{
            position: relative;
            width: 100%;
            display: flex;
            gap:10px;
            justify-content: center;
            margin: 5% 0;
            z-index: 99;
        }
        .search input{
            width: 70%;
            background-color: white;
            outline: none;
            border:none;
            border-bottom: 1px solid white;
            padding: 10px;
            font-size: .9rem;
            color: #000000;
            border-radius: 10px;
            height: 40px;
        }
        .search input::placeholder{
            color: #000000ac;
            font-size: .9rem;
        }
        .search label{
            z-index: 99;
            cursor: pointer;
            background-color: #278AFF;
            width: 13%;
            height: 40px;
            color: white;
            font-size: large;
            display:flex;
            align-items: center;
            border-radius: 10px;
            justify-content: center;
            padding-right: 5px;
        }
        .dataweathercontainer{
            bottom:0;
            left: 0;
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;
            gap: 30px;
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            color: black;
        }
        .dataweathercontainer .main{
            display: flex;
            gap: 5%;
            align-items: center;
        }
        .dataweathercontainer .main .date{
            margin-left: 0;
            font-size: .5em;
            width: 150%;
        }
        .dataweathercontainer .main .temp{
            font-size: 1.4rem;
        }
        .dataweathercontainer .main .name{
            font-size: 1.4rem;
            width: 150%;
            margin-bottom: 0px;
            font-weight: 300;
        }
        .dataweathercontainer .dataWeather .weather{
            display: flex;
            justify-content: center;
        }
        .dataweathercontainer .dataWeather{
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
        }
        .dataweathercontainer .dataWeather .DataWeatherfirst , .dataweathercontainer .dataWeather .DataWeathersecond{
            display: flex;
            gap: 10px;
            font-size: .8rem;
            justify-content: center;
        }
    }
`
