import { useState } from "react"
import styled from "styled-components"

export default function App() {
    const Key = "d87de9bc51b347eff2b1eb6d3b66146c"
    const KeyPhoto = "Qsc1TYPnmNmQGZNIKGH2fEA6QFHgrHaIn8BLw5SEUMY"
    const SecretKeyPhoto = "CF9KCRJPQ34SGrOWngecSuwcxWettUukEQx8Bqns6TE"
    const [city, setCity] = useState<string>("")
    const [PhotoCity, setPhotoCity] = useState()

    const Weather = async () => {
        console.log(city)
        const DataWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Key}&lang=pt_br`)
        const resWeather = await DataWeather.json().
        then((data)=>{
          console.log(data.timezone)
          const Timezone = data.timezone/3600;
          const date = new Date()
          const h = date.getUTCHours()+Timezone
          const m = date.getUTCHours() //pegar o horário de Greenwich 
          const s = date.getUTCHours()
          console.log(h,m,s)
        })

        console.log(resWeather)

        

        

        //mostrar: coordenadas, feels_like, himidade%, pressão, temperatura, nome da cidade, Clima, vento
    }
    return (
        <Styled>
            <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
            <button onClick={Weather}>Search</button><br />
            <img src={PhotoCity} className="img" />
        </Styled>
    )
}

const Styled = styled.div`
  .img{
    height:300px;
  }

`