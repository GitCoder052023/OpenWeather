import React from 'react'
import TodayWeather from './TodayWeather'
import ForecastSection from './ForecastSection'
import useForecast from '../hooks/useForecast'

const WeatherDisplay = ({ weather, loading }) => {
  const { forecast, loading: forecastLoading } = useForecast(weather?.name)
  
  const shouldShowForecast = weather && !loading && forecast && !forecastLoading

  return (
    <div className="weather-display">
      <TodayWeather weather={weather} loading={loading} />
      
      {shouldShowForecast && (
        <ForecastSection 
          forecast={forecast} 
          loading={forecastLoading}
          showDivider={true}
        />
      )}
    </div>
  )
}

export default WeatherDisplay