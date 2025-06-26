import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import getWeatherData from '../api/getWeatherData'
import useUserCity from '../hooks/useUserCity'
import SearchForm from './SearchForm'

const SearchBox = ({ onWeatherUpdate, onLoadingChange }) => {
  const [cityInput, setCityInput] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchWeather = async (targetCity, isUserCity = false) => {
    try {
      setLoading(true)
      onLoadingChange?.(true)
      onWeatherUpdate?.(null)

      const response = await getWeatherData(targetCity)
      onWeatherUpdate?.(response)

      if (isUserCity) {
        sessionStorage.setItem('cachedWeather', JSON.stringify(response))
      }
    } catch (err) {
      console.error('Weather fetch failed:', err)

      toast.error('Failed to fetch weather data', {
        position: 'top-right',
        autoClose: 3000,
        pauseOnHover: true,
        theme: 'dark',
      })

      const cached = sessionStorage.getItem('cachedWeather')
      if (cached) {
        const fallback = JSON.parse(cached)
        onWeatherUpdate?.(fallback)
        toast.info('Showing last known weather from your location', {
          position: 'bottom-center',
          autoClose: 3000,
          theme: 'dark',
        })
      }
    } finally {
      setLoading(false)
      onLoadingChange?.(false)
    }
  }

  const userCity = useUserCity()

  useEffect(() => {
    if (userCity) fetchWeather(userCity, true)
  }, [userCity])

  return (
    <SearchForm
      cityInput={cityInput}
      setCityInput={setCityInput}
      fetchWeather={fetchWeather}
      loading={loading}
    />
  )
}

export default SearchBox