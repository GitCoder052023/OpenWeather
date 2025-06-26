import React from 'react'
import Loader from './Loader'
import WeatherCard from './WeatherCard'

const WeatherResult = ({ weather, loading }) => {
  return (
    <>
      {loading && <Loader />}
      {weather && !loading && (
        <div className="mt-6">
          <WeatherCard {...weather} />
        </div>
      )}
    </>
  )
}

export default WeatherResult
