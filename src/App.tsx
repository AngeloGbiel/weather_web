import React, { useEffect, useState } from "react";
import { CSSreset } from "./components/CSSreset";
import DataWeather from "./components/DataWeather";
export default function App() {
  // const REACT_APP_MY_KEY_WEATHER = process.env.REACT_APP_MY_KEY_WEATHER
  const [city, setCity] = useState<string>("")
  const [PhotoCity, setPhotoCity] = useState<string>()
  const [weather, setWeather] = useState()
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const Key = "d87de9bc51b347eff2b1eb6d3b66146c"
  API_KEY = ${{ secrets.API_KEY }}
  console.log(API_KEY)

  const NewDate = (Timezone:number) =>{
    const date = new Date()
    let h = date.getUTCHours() + Timezone
    let m = date.getMinutes() //pegar o horário de Greenwich 
    let s = date.getSeconds()
    let day = date.getUTCDate()
    let month = date.getUTCMonth()
    let dayofweek = date.getUTCDay()
    let nameofday = ''
    if (h >= 24) {
      h = h - 24
      day++
      dayofweek++
    }
    switch (dayofweek) {
      case 1:
        nameofday = 'Segunda'
        break;
      case 2:
        nameofday = 'terça'
        break;
      case 3:
        nameofday = 'Quarta'
        break;
      case 4:
        nameofday = 'Quinta'
        break;
      case 5:
        nameofday = 'Sexta'
        break;
      case 6:
        nameofday = 'Sábado'
        break;
      case 7:
        nameofday = 'Domingo'
        break;
      default:
        break;
    }
    setDate(`${nameofday}, ${day}/${month}`)
    setTime(`${h}:${m}:${s}`)
  }

  const positionCurrent = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude
      const DataWeather = fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${Key}&lang=pt_br`).
        then((data) => {
          const resWeather = data.json().
            then((dataWeather) => {
              const Timezone = dataWeather.timezone / 3600;
              NewDate(Timezone)
              setWeather(dataWeather)
            })
        })
    });
  }

  useEffect(() => {
    positionCurrent()
  }, [])


  const Weather = async () => {
    const DataWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Key}&lang=pt_br`)
    const resWeather = await DataWeather.json()
    if (resWeather.cod != '404') {
      setWeather(resWeather)
      const Timezone = resWeather.timezone / 3600;
      NewDate(Timezone)
    } else {
      positionCurrent()
      alert('Digite o nome corretamente (sem usar vírgulas)')
    }

  }
  return (
    <>
      <CSSreset />
      <DataWeather city={city} setCity={setCity} date={date} Weather={Weather} time={time} weather={weather || ""} />
    </>
  )
}
