import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTachometerAlt, faTint, faSun, faEye, faDroplet } from '@fortawesome/free-solid-svg-icons';
import '../styles/WeatherCard.css';

function AirConditions({ airQuality }) {
  if (!airQuality) {
    return <div className="WeatherCard">No air quality data available</div>;
  }

  // Access air quality data correctly
  const windSpeed = airQuality.wind?.speed || "N/A";
  const pressure = airQuality.main?.pressure || "N/A";
  const humidity = airQuality.main?.humidity || "N/A";
  const dewPoint = airQuality.main?.dew_point || "N/A";
  const uvIndex = airQuality.components ? airQuality.components.co : "N/A"; // Adjust based on actual response
  const visibility = airQuality.visibility || "N/A";

  return (
    <div className="WeatherCard">
      <h2>Air Conditions</h2>
      <div className="air-conditions-container">
        <div className="air-condition-item">
          <FontAwesomeIcon icon={faWind} />
          <strong>Wind:</strong> {windSpeed} m/s
        </div>
        <div className="air-condition-item">
          <FontAwesomeIcon icon={faTachometerAlt} />
          <strong>Pressure:</strong> {pressure} hPa
        </div>
        <div className="air-condition-item">
          <FontAwesomeIcon icon={faTint} />
          <strong>Humidity:</strong> {humidity}%
        </div>
        <div className="air-condition-item">
          <FontAwesomeIcon icon={faSun} />
          <strong>UV Index:</strong> {uvIndex}
        </div>
        <div className="air-condition-item">
          <FontAwesomeIcon icon={faDroplet} />
          <strong>Dew Point:</strong> {dewPoint}°C
        </div>
       
        <div className="air-condition-item">
          <FontAwesomeIcon icon={faEye} />
          <strong>Visibility:</strong> {visibility} km
        </div>
      </div>
    </div>
  );
}

export default AirConditions;
