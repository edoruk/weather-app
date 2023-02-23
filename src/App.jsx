import "./App.css"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import background3 from "./backgrounds/background3.jpeg"

import { ICON_MAP } from "./iconMap"
import { INFO_MAP } from "./infoMap"

import {
  faLocationDot,
  faMagnifyingGlass,
  faTemperatureHigh,
  faWind,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { getWeather, getCoord } from "./weather"
import Card from "./components/card"
import ScrollContainer from "react-indiana-drag-scroll"

function App() {
  const [name, setName] = useState("")
  const [cityName, setCityName] = useState("")

  const [current, setCurrent] = useState([])
  const [daily, setDaily] = useState([])

  const today = new Date()

  const handleChange = (e) => {
    setName(e.target.value)
  }
  const handleSearch = () => {
    setCityName(name)
  }

  function getIconUrl(iconCode) {
    return `./icons/animated/${ICON_MAP.get(iconCode)}.svg`
  }

  useEffect(() => {
    getCoord(cityName).then(({ lat, lon }) => {
      getWeather(lat, lon)
        .then(({ current_weather, daily }) => {
          setCurrent(current_weather)
          setDaily(daily)
        })
        .catch((error) => {
          console.log("Do not have lat lon!!")
        })
    })
  }, [cityName])

  document.body.style.background = `url(${background3})`
  document.body.style.backgroundSize = "cover"
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.transition = "linear 2s"

  return (
    <main className="App">
      <motion.div
        className="container"
        animate={cityName !== "" ? { height: "25rem" } : { height: "2rem" }}
        transition={{ type: "bounce", delay: 0.1 }}
      >
        <section className="search-bar">
          <FontAwesomeIcon className="s-icon" icon={faLocationDot} />
          <input
            type="text"
            onChange={handleChange}
            placeholder="Type city..."
            onKeyDown={(e) => {
              e.key === "Enter" ? handleSearch() : ""
            }}
          />
          <FontAwesomeIcon
            className="s-icon"
            icon={faMagnifyingGlass}
            onClick={handleSearch}
          />
        </section>
        <motion.section
          className="result-bar"
          animate={
            cityName !== ""
              ? {
                  top: 0,
                  opacity: 1,
                  transition: { duration: 2, delay: 0.3 },
                }
              : {
                  opacity: 0,
                  transition: { duration: 41.1 },
                }
          }
        >
          <div className="weather-results">
            <img
              className="w-icon"
              src={getIconUrl(current.weathercode)}
              alt="svg"
            />
            <div className="w-desc">{INFO_MAP.get(current.weathercode)}</div>
          </div>
          <div className="results-info">
            <div className="main-wind">
              <FontAwesomeIcon className="r-icon" icon={faTemperatureHigh} />
              <div className="info">{current.temperature}</div>
            </div>
            <div className="main-wind">
              <FontAwesomeIcon className="r-icon" icon={faWind} />
              <div className="info">{current.windspeed}</div>
            </div>
          </div>
          <ScrollContainer className="scroll-container">
            {daily.map((day, i) => {
              return (
                <Card
                  key={i}
                  iconCode={getIconUrl(day.iconCode)}
                  minTemp={day.minTemp}
                  maxTemp={day.maxTemp}
                  date={(today.getDay() + i) % 7}
                />
              )
            })}
          </ScrollContainer>
        </motion.section>
      </motion.div>
    </main>
  )
}

export default App
