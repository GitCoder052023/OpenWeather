import { useEffect, useState } from 'react'

const useUserCity = () => {
  const [city, setCity] = useState(null)

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json")
        const { ip } = await ipRes.json()

        const locationRes = await fetch(`https://ipwho.is/${ip}`)
        const locationData = await locationRes.json()

        if (locationData.success) {
          setCity(locationData.city)
        } else {
          console.error("Failed to fetch location:", locationData.message)
        }
      } catch (err) {
        console.error("Error fetching user city:", err)
      }
    }

    fetchCity()
  }, [])

  return city
}

export default useUserCity
