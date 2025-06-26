import { Cloud } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full mb-4 shadow-lg animate-pulse">
        <Cloud className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-4xl font-bold text-white mb-2 tracking-wide">
        OpenWeather.io
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full"></div>
    </div>
  )
}

export default Header
