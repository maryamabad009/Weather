import React from 'react';
import '../styles/WeatherCard.css';

function EightDayForecast({ forecast }) {
  return (
    <div className="WeatherCard">
      <h2>8-Day Forecast</h2>
      <div className="eight-day-forecast-container">
        {forecast.map((day, index) => (
          <div key={index} className="eight-day-forecast-item">
            <img src={`http://openweathermap.org/img/wn/${day.icon}.png`} alt={day.description} className="forecast-icon" />
            <div className="forecast-details">
              <p>{day.date}</p>
              <p>{day.temp_max} / {day.temp_min}°C</p>
              <p>{day.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EightDayForecast;
