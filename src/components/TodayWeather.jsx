import React from 'react'
import WeatherResult from './WeatherResult'

const TodayWeather = ({ weather, loading }) => {
  return (
    <div className="today-weather-section">
      <WeatherResult weather={weather} loading={loading} />
    </div>
  )
}

export default TodayWeather