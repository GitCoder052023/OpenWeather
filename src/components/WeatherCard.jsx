import React from 'react'
import { Thermometer, Droplets, Wind, Eye, Gauge, Sunrise, Sunset, MapPin } from 'lucide-react'

const WeatherCard = ({ 
  temp, 
  feels_like, 
  pressure, 
  humidity, 
  speed, 
  country, 
  sunrise, 
  sunset, 
  name 
}) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  const formatTemp = (temp) => Math.round(temp)

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700/50 mt-6 animate-fade-in">
      <div className="flex items-center justify-center mb-6">
        <MapPin className="w-5 h-5 text-gray-400 mr-2" />
        <h2 className="text-2xl font-bold text-white">{name}, {country}</h2>
      </div>

      <div className="text-center mb-8">
        <div className="text-6xl font-bold text-white mb-2">
          {formatTemp(temp)}°C
        </div>
        <div className="text-gray-400 text-lg">
          Feels like {formatTemp(feels_like)}°C
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-900/40 rounded-xl p-4 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
          <div className="flex items-center mb-2">
            <Droplets className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-gray-400 text-sm">Humidity</span>
          </div>
          <div className="text-white text-xl font-semibold">{humidity}%</div>
        </div>

        <div className="bg-gray-900/40 rounded-xl p-4 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
          <div className="flex items-center mb-2">
            <Wind className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-gray-400 text-sm">Wind</span>
          </div>
          <div className="text-white text-xl font-semibold">{speed} m/s</div>
        </div>

        <div className="bg-gray-900/40 rounded-xl p-4 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
          <div className="flex items-center mb-2">
            <Gauge className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-gray-400 text-sm">Pressure</span>
          </div>
          <div className="text-white text-xl font-semibold">{pressure} hPa</div>
        </div>

        <div className="bg-gray-900/40 rounded-xl p-4 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
          <div className="flex items-center mb-2">
            <Thermometer className="w-5 h-5 text-red-400 mr-2" />
            <span className="text-gray-400 text-sm">Feels Like</span>
          </div>
          <div className="text-white text-xl font-semibold">{formatTemp(feels_like)}°C</div>
        </div>
      </div>

      <div className="flex justify-between items-center bg-gray-900/40 rounded-xl p-4 border border-gray-700/30">
        <div className="flex items-center">
          <Sunrise className="w-5 h-5 text-yellow-400 mr-3" />
          <div>
            <div className="text-gray-400 text-xs uppercase tracking-wide">Sunrise</div>
            <div className="text-white font-semibold">{formatTime(sunrise)}</div>
          </div>
        </div>
        
        <div className="w-px h-8 bg-gray-700"></div>
        
        <div className="flex items-center">
          <Sunset className="w-5 h-5 text-orange-400 mr-3" />
          <div>
            <div className="text-gray-400 text-xs uppercase tracking-wide">Sunset</div>
            <div className="text-white font-semibold">{formatTime(sunset)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard