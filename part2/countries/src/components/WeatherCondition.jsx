import { useEffect, useState } from 'react'
import weather_data from '../services/weather_data'

const WeatherCondition = ({ city_name }) => {
  const [weatherData, setWeatherData] = useState({})

  useEffect(() => {
    console.log('Fetching weather data!')
    weather_data
      .fetchWeatherDataByCity(city_name)
      .then((data) => {
        setWeatherData(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (Object.keys(weatherData).length === 0) {
    return
  }

  return (
    <div className="weather">
      <h3>Weather in {weatherData.name}</h3>
      <p>Temperature - {weatherData.main?.temp}° Celcius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0]?.icon}@2x.png`}
        alt="weather condition"
        width={150}
      />
      <p>Wind {weatherData.wind?.speed} m/s</p>
    </div>
  )
}

export default WeatherCondition
