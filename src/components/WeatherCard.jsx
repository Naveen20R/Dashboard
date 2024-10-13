import React, { useEffect, useState } from 'react';
import { fetchWeatherData } from '../Searvices/ApiService';


function WeatherCard() {
    const [weather, setWeather] = useState({ temperature: '', description: '', place: "" });

    useEffect(() => {
        const getWeather = async () => {
            const data = await fetchWeatherData();
            if (data) {
                setWeather({
                    temperature: data.current.temperature,
                    description: data.current.weather_descriptions[0],
                    place: data.request.query.split(' ')[0]
                });
            }
        };

        getWeather();
    }, []);

    

    return (
        <>
            <div className="rounded py-3 h-100 text-white d-flex justify-content-center align-items-center flex-column weather">
                <i className="fa fa-cloud fs-1" aria-hidden="true"></i>
                <h5 className='fs-2'>{weather.temperature}°C</h5>
                {/* <p>{weather.description}</p> */}
                <p>{weather.place}</p>
            </div>
        </>
    )
}

export default WeatherCard