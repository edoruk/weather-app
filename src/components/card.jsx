import React from "react"
import "./card.css"

const days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
}

function card(props) {
  return (
    <div>
      <div className="card-container">
        <img className="card-icon" src={props.iconCode} alt="" />
        <div className="card-info">
          <div className="low-high">{props.minTemp}</div>
          <div className="divider"></div>
          <div className="low-high">{props.maxTemp}</div>
        </div>
        <div className="date">{days[props.date]}</div>
      </div>
    </div>
  )
}

export default card
