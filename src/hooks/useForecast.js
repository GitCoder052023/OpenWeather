import { useEffect, useState } from 'react'
import getWeatherForecast from '../api/getForecast'

const useForecast = (city) => {
  const [forecast, setForecast] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!city) return
    const fetch = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getWeatherForecast(city)
        setForecast(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetch()
  }, [city])

  return { forecast, loading, error }
}

export default useForecast
