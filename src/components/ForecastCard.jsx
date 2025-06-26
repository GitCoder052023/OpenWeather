
import React from 'react'
import { Cloud, CloudRain, Sun, CloudSnow, Zap, CloudDrizzle, Wind } from 'lucide-react'

const ForecastCard = ({ 
  date, 
  temp, 
  minTemp, 
  maxTemp, 
  avgHumidity, 
  description 
}) => {
  const formatTemp = (temp) => Math.round(temp)
  
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today'
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow'
    } else {
      return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      })
    }
  }

  const getWeatherIcon = (description) => {
    const desc = description.toLowerCase()
    
    if (desc.includes('rain') || desc.includes('drizzle')) {
      if (desc.includes('light')) {
        return <CloudDrizzle className="w-8 h-8 text-blue-400" />
      }
      return <CloudRain className="w-8 h-8 text-blue-500" />
    }
    if (desc.includes('snow')) {
      return <CloudSnow className="w-8 h-8 text-blue-200" />
    }
    if (desc.includes('thunder') || desc.includes('storm')) {
      return <Zap className="w-8 h-8 text-yellow-400" />
    }
    if (desc.includes('cloud')) {
      if (desc.includes('broken') || desc.includes('scattered')) {
        return <Cloud className="w-8 h-8 text-gray-400" />
      }
      return <Cloud className="w-8 h-8 text-gray-500" />
    }
    if (desc.includes('clear') || desc.includes('sun')) {
      return <Sun className="w-8 h-8 text-yellow-400" />
    }
    if (desc.includes('wind')) {
      return <Wind className="w-8 h-8 text-green-400" />
    }
    
    return <Cloud className="w-8 h-8 text-gray-400" />
  }

  const getGradientByTemp = (temp) => {
    if (temp >= 30) return 'from-red-500/20 to-orange-500/20'
    if (temp >= 20) return 'from-orange-500/20 to-yellow-500/20'
    if (temp >= 10) return 'from-yellow-500/20 to-green-500/20'
    if (temp >= 0) return 'from-green-500/20 to-blue-500/20'
    return 'from-blue-500/20 to-purple-500/20'
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group min-w-[180px]">
      <div className="text-center mb-3">
        <h3 className="text-white font-semibold text-sm">
          {formatDate(date)}
        </h3>
      </div>

      <div className="flex justify-center mb-3">
        <div className="relative">
          {getWeatherIcon(description)}
          <div className={`absolute inset-0 bg-gradient-to-r ${getGradientByTemp(temp)} rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
        </div>
      </div>

      <div className="text-center mb-3">
        <div className="text-white text-2xl font-bold mb-1">
          {formatTemp(temp)}°
        </div>
        <div className="flex justify-center items-center text-gray-400 text-xs space-x-2">
          <span className="flex items-center">
            <span className="text-gray-500">H:</span>
            <span className="ml-1 text-orange-400 font-medium">{formatTemp(maxTemp)}°</span>
          </span>
          <span className="text-gray-600">•</span>
          <span className="flex items-center">
            <span className="text-gray-500">L:</span>
            <span className="ml-1 text-blue-400 font-medium">{formatTemp(minTemp)}°</span>
          </span>
        </div>
      </div>

      <div className="text-center mb-3">
        <p className="text-gray-400 text-xs capitalize leading-tight px-1">
          {description}
        </p>
      </div>

      <div className="bg-gray-900/40 rounded-lg p-2 border border-gray-700/30 group-hover:border-gray-600/50 transition-all duration-300">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-gray-400 text-xs">Humidity</span>
          <span className="text-white text-xs font-semibold">{avgHumidity}%</span>
        </div>
      </div>

      <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: '0.1s' }}></div>
    </div>
  )
}

export default ForecastCard
