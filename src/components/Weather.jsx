import React, { useState } from 'react'
import './Weather.css'
import { BsSearch } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdWindPower } from "react-icons/md";
import { WiHumidity } from 'react-icons/wi';

const Weather = () => {

    const [weather, setWeather] = useState();
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    const API_KEY = '6b3a3e5042dbc83aeafbf5187e5e82f5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    function changeNameCity(event) {
        setCity(event.target.value)
    }

    async function fetchData() {
        try {
            let response = await fetch(url)
            let output = await response.json();
            if (response.ok) {
                setWeather(output);
                setError('')
                console.log(output, 'success')
            } else {
                setError('No data round. Please try again')
            }
        } catch (err) {

        }
    }

    return (
        <div className="container">
            <div className="city">
                <input type="text" value={city} onChange={changeNameCity} placeholder='Enter the name of city...'></input>
                <button onClick={() => fetchData()}>
                    <BsSearch></BsSearch>
                </button>
            </div>

            {
                error && <p className="error-message">{error}</p>
            }

            {weather && weather.weather &&
                <div className="content">
                    <div className="weather-image">
                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" ></img>
                        <h3 className="desc">{weather.weather[0].description}</h3>
                    </div>

                    <div className="weather-temp">
                        <h2>{weather.main.temp}<span>&deg;C</span></h2>
                    </div>

                    <div className="weather-city">
                        <div className="location">
                            <IoLocationSharp></IoLocationSharp>
                        </div>
                        <p>{weather.name},<span>{weather.sys.country}</span></p>
                    </div>

                    <div className="weather-stats">
                        <div className="wind">
                            <div className="wind-icon">
                                <MdWindPower></MdWindPower>
                            </div>
                            <h3 className="wind-speed">{weather.wind.speed}</h3>
                            <div className="wind-heading">Wind Speed</div>
                        </div>
                        <div className="humidity">
                            <div className="humidity-icon">
                                <WiHumidity></WiHumidity>
                            </div>
                            <div className="humidity-percent">{weather.main.humidity}<span>%</span></div>
                            <div className="humidity-heading">Humidity</div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Weather