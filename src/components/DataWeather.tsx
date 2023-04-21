import React, { useState } from 'react'
import styled from 'styled-components'
import * as Bs from 'react-icons/bs'
import * as Ri from 'react-icons/ri'
import { Button, CircularProgress, Container, Grid, Stack, TextField } from '@mui/material'

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
    city: string,
    Weather: () => void
}


export default function DataWeather({ weather, time, date, setCity, Weather, city }: Props) {
    const Enter = (key: React.KeyboardEvent<HTMLDivElement>) => {
        if (key.key == 'Enter') {
            Weather()
            setCity('')
        }
    }
    const Search = () => {
        Weather()
        setCity('')
    }
    return (
        <ContainerWeather fixed maxWidth={'xs'}>
            <Stack marginBottom={5} spacing={2} direction="row" margin='normal'>
                <TextField value={city} onKeyDown={(key) => Enter(key)} onChange={(e) => setCity(e.target.value)} fullWidth size='small' id="outlined-basic" label="Outlined" variant="outlined" />
                <Button variant="contained" size='small'>
                    <Bs.BsSearch onClick={Search} />
                </Button>
            </Stack>
            {weather ? <div className='dataWeather'>
                <div className='main'>
                    <h2>{weather.name}</h2>
                    <p className='temp'>{Math.round(weather.main.temp)}°</p>
                    <p className='date'>{time} - {date}</p>
                </div>
                <div className='weather'>
                    <span>{
                        weather.weather[0].main == "Clear" ?
                            <Ri.RiSunLine /> : weather.weather[0].main == "Clouds" ?
                                <Bs.BsCloudSunFill /> : weather.weather[0].main == "Rain" ?
                                    <Bs.BsFillCloudRainFill /> : weather.weather[0].main == "Snow" ?
                                        <Bs.BsFillCloudSnowFill /> : null
                    }</span>
                    <p>{weather.weather[0].description}</p>
                </div>
                <div className='weatherInfo'>
                    <div className='weatherFeelsLikeHumidity'>
                        <p>Feels Like: {Math.round(weather.main.feels_like)}°C</p>
                        <p>|</p>
                        <p>humidity: {weather.main.humidity}%</p>
                    </div>
                    <div className='weatherVisibilityWind'>
                        <p>Visibility: {(weather.visibility / 1000).toFixed(1)}km</p> {/*Deixar o valor como 10.0 (cada valor passado dentro do "toFixed" é q quantidade de números depois da vírgula) */}
                        <p>|</p>
                        <p>Wind: {(weather.wind.speed).toFixed(1)}m/s</p>
                    </div>
                </div>
            </div> : <Grid container direction="row" justifyContent="center" alignItems="center"> {/*centralizar algo com o grid */}
                <CircularProgress color="inherit" /> {/*Barra de progresso */}
            </Grid>}

        </ContainerWeather>
    )
}
const ContainerWeather = styled(Container)`
    background: linear-gradient(270deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%);
    box-shadow: 2px 2px 13px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(15px);
    margin-top: 2%;
    padding: 20px 0 50px 0;
    .dataWeather{
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .dataWeather .main{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .6rem;
        color: #000000;
        h2{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 2rem;
        };
        .temp{
            font-size: 1.5rem;
        }
        .date{
            font-size: 1rem;
        }
    }
    .weather{
        display: flex;
        justify-content: center;
        align-items: center;
        gap:10px;
        span{
            font-size: 2rem;
        }
        p{
            font-size: 1rem;
        }
    }
    .weatherInfo{
        display: flex;
        flex-direction: column;
        gap: .5rem;
        .weatherFeelsLikeHumidity,.weatherVisibilityWind{
            /* background-color: red; */
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5%;
        }

    }
`