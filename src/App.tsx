import React, { useState } from "react";
import { CSSreset } from "./components/CSSreset";
import Search from "./components/Search";
import { Component } from "react";
import DataWeather from "./components/DataWeather";
export default function App() {
  const [city, setCity] = useState<string>("")
  const [PhotoCity, setPhotoCity] = useState<string>()
  const [weather, setWeather] = useState()
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  const Weather = async () => {
    const Key = "d87de9bc51b347eff2b1eb6d3b66146c"

    const DataWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Key}&lang=pt_br`)
    const resWeather = await DataWeather.json().
      then((data) => {
        setWeather(data)
        const Timezone = data.timezone / 3600;
        const date = new Date()
        let h = date.getUTCHours() + Timezone
        let m = date.getMinutes() //pegar o horário de Greenwich 
        let s = date.getSeconds()
        let day = date.getUTCDate()
        let month = date.getUTCMonth()
        let dayofweek = date.getUTCDay()
        let nameofday = ''
        if(h >= 24){
          h = h-24
          console.log(h)
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
        console.log(day, month, dayofweek);
        setDate(`${nameofday}, ${day}/${month}`)
        setTime(`${h}:${m}:${s}`)
      })

    const KeyPhoto = "Qsc1TYPnmNmQGZNIKGH2fEA6QFHgrHaIn8BLw5SEUMY"
    try {
      const Photo = await fetch(`https://api.unsplash.com/photos/random?client_id=${KeyPhoto}&query=${city}`)
      const resPhoto = await Photo.json().then((data) => {
        setPhotoCity(data.links.download)
      })
    } catch (error) {
      console.log(error)
    }
    // console.log(typeof(resWeather))
  }
  return (
    <>
      <CSSreset />
      <Search setCity={setCity} Weather={Weather} />
      <DataWeather date={date} time={time} weather={weather || ""} />
    </>
  )
}
