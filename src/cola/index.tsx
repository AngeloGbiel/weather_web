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
        const resWeather = await DataWeather.json()


        const Photo = await fetch(`https://api.unsplash.com/photos/random?client_id=${KeyPhoto}&query=${city}`)
        const resPhoto = await Photo.json()
            .then((data) => {
                console.log(data.links.download)
                setPhotoCity(data.links.download)
            })
            console.log(resWeather);
            console.log('cidade não encontrada');
            


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