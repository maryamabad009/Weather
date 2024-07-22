import React from 'react';
import '../styles/WeatherCard.css';

function TodaysForecast({ forecast }) {
  return (
    <div className="WeatherCard">
      <h2>Today's Forecast</h2>
      <div className="forecast-container">
        {forecast.list.slice(0, 8).map((item, index) => (
          <div key={index} className="forecast-item">
            <p>{item.dt_txt}</p>
            <p>{item.main.temp}°C</p>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodaysForecast;
