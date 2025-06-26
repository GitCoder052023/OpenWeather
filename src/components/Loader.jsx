import React from 'react'
import { Cloud, Sun, CloudRain } from 'lucide-react'

const Loader = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 mt-6">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="relative flex items-center justify-center space-x-4">
          <Cloud className="w-8 h-8 text-gray-400 animate-bounce" />
          <div className="relative">
            <Sun className="w-10 h-10 text-yellow-400 animate-spin" />
            <div className="absolute inset-0 w-10 h-10 bg-yellow-400/20 rounded-full animate-ping"></div>
          </div>
          <CloudRain className="w-8 h-8 text-blue-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
          
          <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute -top-1 right-4 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-6 -right-3 w-1.5 h-1.5 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-2 animate-pulse">
            Fetching Weather Data
          </h3>
          <p className="text-gray-400 text-sm">
            Getting the latest forecast for you...
          </p>
        </div>

        <div className="w-full max-w-xs">
          <div className="bg-gray-900/60 rounded-full h-2 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-pulse"></div>
          </div>
        </div>

        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        <div className="relative">
          <div className="w-12 h-12 border-4 border-gray-600 rounded-full"></div>
          <div className="absolute inset-0 w-12 h-12 border-4 border-blue-400 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader