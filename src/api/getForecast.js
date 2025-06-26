import axios from 'axios'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const getWeatherForecast = async (city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        const response = await axios.get(url)
        const list = response.data.list

        const grouped = {}

        list.forEach(item => {
            const date = item.dt_txt.split(' ')[0]
            if (!grouped[date]) grouped[date] = []
            grouped[date].push(item)
        })

        const result = {}

        Object.entries(grouped).slice(0, 5).forEach(([date, entries]) => {
            const noon = entries.find(e => e.dt_txt.includes('12:00:00')) || entries[0]
            const maxTemp = Math.max(...entries.map(e => e.main.temp_max))
            const minTemp = Math.min(...entries.map(e => e.main.temp_min))
            const totalHumidity = entries.reduce((sum, e) => sum + e.main.humidity, 0)
            const avgHumidity = Math.round(totalHumidity / entries.length)

            result[date] = {
                temp: noon.main.temp,
                minTemp: minTemp,
                maxTemp: maxTemp,
                avgHumidity: avgHumidity,
                description: noon.weather[0].description
            }
        })

        return result
    } catch (err) {
        console.error("Axios error:", err.message)
        throw err
    }
}

export default getWeatherForecast
