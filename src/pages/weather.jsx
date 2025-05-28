import { useEffect, useState } from 'react';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const city = 'Akola';



  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        if (data.cod === 200) {
          setWeather(data);
        } else {
          setError("Weather data not found.");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to fetch weather data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🌤️ Weather in {city}</h2>

      {loading && <div className="alert alert-info">Loading weather data...</div>}

      {error && <div className="alert alert-danger">{error}</div>}

      {weather && (
        <div className="card shadow-lg">
          <div className="card-body">
            <h4 className="card-title">{weather.weather[0].main}</h4>
            <h5 className="card-subtitle mb-2 text-muted">{weather.weather[0].description}</h5>
            <hr />
            <p className="card-text"><strong>🌡️ Temperature:</strong> {weather.main.temp}°C</p>
            <p className="card-text"><strong>💧 Humidity:</strong> {weather.main.humidity}%</p>
            <p className="card-text"><strong>🌬️ Wind Speed:</strong> {weather.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
