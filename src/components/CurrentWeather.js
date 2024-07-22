import React from 'react';
import '../styles/WeatherCard.css';

function CurrentWeather({ weather }) {
  // Access current weather data
  const cityName = weather.name;
  const weatherDescription = weather.weather[0].description;
  const temperature = weather.main.temp;
  const weatherIcon = weather.weather[0].icon;

  return (
    <div className="WeatherCard">
      <h2>Current Weather</h2>
      <div className="current-weather-container">
        <div className="current-weather-info">
          <h3>{cityName}</h3>
          <p>{weatherDescription}</p>
          <p>{temperature}°C</p>
        </div>
        <div className="current-weather-image">
          <img
            src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt={weatherDescription}
            className="weather-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
