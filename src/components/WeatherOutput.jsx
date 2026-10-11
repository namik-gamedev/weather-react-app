import React from "react"
import ErrorComponent from "./errorComponent/ErrorComponent"
import WeatherInfo from "./weatherInfo/WeatherInfo"

const WeatherOutput = ({ data, error }) => {
   return <div>{error ? <ErrorComponent /> : <WeatherInfo data={data} />}</div>
}

export default WeatherOutput
