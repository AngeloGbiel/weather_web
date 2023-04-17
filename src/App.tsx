import React, { useState } from "react";
import { CSSreset } from "./components/CSSreset";
import Search from "./components/Search";
import { Component } from "react";
import DataWeather from "./components/DataWeather";
export default function App(){
  const [city,setCity]=useState<string>("")
  const Key = "d87de9bc51b347eff2b1eb6d3b66146c"
  const [PhotoCity, setPhotoCity] = useState<string>()
  const [weather,setWeather]=useState()
  
  const Weather = async() =>{
    const DataWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Key}&lang=pt_br`)
    const resWeather = await DataWeather.json()

    const KeyPhoto = "Qsc1TYPnmNmQGZNIKGH2fEA6QFHgrHaIn8BLw5SEUMY"
    try {
      const Photo = await fetch(`https://api.unsplash.com/photos/random?client_id=${KeyPhoto}&query=${city}`)
      const resPhoto = await Photo.json().then((data)=>{
        setPhotoCity(data.links.download)
      })
    } catch (error) {
      console.log(error)
    }
    // console.log(typeof(resWeather))
    setWeather(resWeather)
  }
  return(
    <>
      <CSSreset/>
      <Search setCity={setCity} Weather={Weather}/>
      <DataWeather weather={weather||""}/>
    </>
  )
}
