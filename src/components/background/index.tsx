import React from 'react'
import Rain from './Rain'
import Clear from './Clear'
import Clouds from './Clouds'
import Snow from './Snow'

interface Props {
    weather: {
        weather: { [key: number]: { description: string, main: string } }
    }
}

export default function BackGround({ weather }: Props) {
    return (
        <div>
            {
                weather.weather[0].main == "Clear" ?
                    <Clear/> : weather.weather[0].main == "Clouds" ?
                        <Clouds/> : weather.weather[0].main == "Rain" ?
                            <Rain /> : weather.weather[0].main == "Snow" ?
                                <Snow /> : null
            }
        </div>
    )
}
