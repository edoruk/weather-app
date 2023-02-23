import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY

export async function getWeather(lat, lon) {
  return await axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timeformat=unixtime&timezone=Europe%2FMoscow`
    )
    .then(({ data }) => {
      return {
        current_weather: data.current_weather,
        daily: parseDaily(data),
      }
    })
}

export async function getCoord(cityName) {
  return await axios
    .get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`
    )
    .then((res) => {
      return {
        lat: res.data[0].lat,
        lon: res.data[0].lon,
      }
    })
}

function parseDaily({ daily }) {
  return daily.time.map((time, i) => {
    return {
      iconCode: daily.weathercode[i],
      minTemp: Math.round(daily.temperature_2m_min[i]),
      maxTemp: Math.round(daily.temperature_2m_max[i]),
    }
  })
}
