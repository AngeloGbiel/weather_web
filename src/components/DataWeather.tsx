import React from 'react'
import styled from 'styled-components'
import * as Ri from 'react-icons/ri'

interface Props {
    weather: {
        main:{temp:number,humidity:number,feels_like:number},
        name:string,
        weather:{[key:number]:{description:string}},
        visibility:number,
        wind:{speed:number}
    }|''
}


export default function DataWeather({ weather }: Props) {
    console.log(weather);
    
    return (
        <>
            {weather ? <DataWeatherStyled>
                <div className='main'>
                    <h1 className='temp'>{Math.round(weather.main.temp)}°</h1>
                    <div>
                        <h2 className='name'>{weather.name}</h2>
                        <p className='date'>18:53:34 - Sunday, 16/04</p>
                    </div>
                </div>
                <div className='dataWeather'>
                    <div className='weather'>
                        <span><Ri.RiSunLine /></span>
                        <p>{weather.weather[0].description}</p>
                    </div>
                    <div className='DataWeatherfirst'>
                        <p>Feels Like: {Math.round(weather.main.feels_like)}°C</p>
                        <p>|</p>
                        <p>humidity: {weather.main.humidity}%</p>
                    </div>
                    <div className='DataWeathersecond'>
                        <p>Visibility: {(weather.visibility/1000).toFixed(1)}km</p> {/*Deixar o valor como 10.0 (cada valor passado dentro do "toFixed" é q quantidade de números depois da vírgula) */}
                        <p>|</p>
                        <p>Wind: {(weather.wind.speed).toFixed(1)}m/s</p>
                    </div>
                </div>
            </DataWeatherStyled> : null}
        </>
    )
}
const DataWeatherStyled = styled.div`
    /* background-color: red; */
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
`
