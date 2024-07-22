import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import TodaysForecast from './components/TodaysForecast';
import AirConditions from './components/AirConditions';
import EightDayForecast from './components/EightDayForecast'; // Import the new component
import './styles/App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [eightDayForecast, setEightDayForecast] = useState([
    { date: "Mon, Jul 22", temp_max: 41, temp_min: 30, description: "light rain", icon: "10d" },
    { date: "Tue, Jul 23", temp_max: 41, temp_min: 30, description: "light rain", icon: "10d" },
    { date: "Wed, Jul 24", temp_max: 37, temp_min: 27, description: "heavy intensity rain", icon: "11d" },
    { date: "Thu, Jul 25", temp_max: 36, temp_min: 25, description: "heavy intensity rain", icon: "11d" },
    { date: "Fri, Jul 26", temp_max: 36, temp_min: 29, description: "light rain", icon: "10d" },
    { date: "Sat, Jul 27", temp_max: 37, temp_min: 30, description: "light rain", icon: "10d" },
    { date: "Sun, Jul 28", temp_max: 32, temp_min: 28, description: "light rain", icon: "10d" },
    { date: "Mon, Jul 29", temp_max: 30, temp_min: 26, description: "moderate rain", icon: "09d" }
  ]);
  
  const [location, setLocation] = useState('');

  const fetchWeather = async (city) => {
    try {
      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4bc243af8a17cda6a5771dde16597655&units=metric`);
      setWeather(weatherResponse.data);
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=4bc243af8a17cda6a5771dde16597655&units=metric`);
      setForecast(forecastResponse.data);
      const airQualityResponse = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?q=${city}&appid=4bc243af8a17cda6a5771dde16597655`);
      setAirQuality(airQualityResponse.data.list[0]);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  const staticAirQuality = {
    wind: { speed: "4.0", deg: "WSW" },
    main: { pressure: "995", humidity: "52", dew_point: "28" },
    uv: "2",
    visibility: "10.0"
  };
  
  return (
    <div className="App">
      <Header onSearch={fetchWeather} setLocation={setLocation} />
      <div className="content">
        <div className="left-column">
          {weather && <CurrentWeather weather={weather} />}
          {forecast && <TodaysForecast forecast={forecast} />}
          <AirConditions airQuality={staticAirQuality} />
        </div>
        <div className="right-column">
          <EightDayForecast forecast={eightDayForecast} />
        </div>
      </div>
    </div>
  );
}

export default App;
