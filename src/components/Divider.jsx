import React from 'react'

const WeatherDivider = () => {
  return (
    <div className="my-8 flex items-center justify-center">
      <div className="flex items-center w-full max-w-xs">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-gray-600/30"></div>
        
        <div className="flex items-center px-4 space-x-2">
          <div className="w-1 h-1 bg-gray-600/60 rounded-full animate-pulse"></div>
          <div className="w-1.5 h-1.5 bg-gray-500/80 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 h-1 bg-gray-600/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-600/50 to-gray-600/30"></div>
      </div>
    </div>
  )
}

export default WeatherDivider
