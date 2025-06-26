import axios from 'axios'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const getWeatherData = async (city) => {
  try {
    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    })

    const data = res.data

    return {
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      speed: data.wind.speed,
      country: data.sys.country,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      name: data.name,
    }
  } catch (err) {
    console.error('Error fetching weather data:', err)
    throw err
  }
}

export default getWeatherData
