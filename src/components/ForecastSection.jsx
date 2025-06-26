import React from 'react'
import ForecastCard from './ForecastCard'
import WeatherDivider from './Divider'

const ForecastSection = ({ forecast, loading, showDivider = true }) => {
  if (loading || !forecast) return null

  return (
    <div className="forecast-section">
      {showDivider && <WeatherDivider />}
      
      <div className="mt-6 flex flex-wrap justify-center align-center gap-4 md:flex-nowrap md:justify-center md:items-center md:gap-6 lg:gap-8 xl:gap-10">
        {Object.entries(forecast).map(([date, data]) => (
          <ForecastCard
            key={date}
            date={date}
            temp={data.temp}
            minTemp={data.minTemp}
            maxTemp={data.maxTemp}
            avgHumidity={data.avgHumidity}
            description={data.description}
          />
        ))}
      </div>
    </div>
  )
}

export default ForecastSection