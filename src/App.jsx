import React, { useState } from 'react'
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import WeatherDisplay from './components/WeatherDisplay'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleWeatherUpdate = (weatherData) => {
    setWeather(weatherData)
  }

  const handleLoadingChange = (isLoading) => {
    setLoading(isLoading)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-start sm:items-start md:items-center justify-center p-4">
      <div className="w-full max-w-md mt-8 sm:mt-12 md:mt-0">
        <Header />
        
        <SearchBox 
          onWeatherUpdate={handleWeatherUpdate}
          onLoadingChange={handleLoadingChange}
        />
        
        <WeatherDisplay 
          weather={weather} 
          loading={loading} 
        />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App