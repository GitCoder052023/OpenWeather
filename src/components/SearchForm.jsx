import React from 'react'
import { Search } from 'lucide-react'
import { toast } from 'react-toastify'

const SearchForm = ({ cityInput, setCityInput, fetchWeather, loading }) => {
  const handleSearch = async (e) => {
    e.preventDefault()

    if (!cityInput.trim()) {
      toast.error('Please enter a city name', {
        position: 'top-right',
        autoClose: 3000,
        pauseOnHover: true,
        theme: 'dark',
      })
      return
    }

    await fetchWeather(cityInput)
    setCityInput("")
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700/50 relative">
      <div className="relative">
        <input
          className="w-full bg-gray-900/80 text-white placeholder-gray-400 rounded-xl px-6 py-4 pr-14 border border-gray-600/50 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/20 transition-all duration-300 ease-in-out hover:bg-gray-900/90 text-lg"
          type="text"
          placeholder="Wanna check another city?"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          disabled={loading}
        />
        <button
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-lg px-4 py-2 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95 group cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleSearch}
          disabled={loading}
        >
          <Search className={`w-5 h-5 group-hover:rotate-12 transition-transform duration-300 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>
    </div>
  )
}

export default SearchForm
