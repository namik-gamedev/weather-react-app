import React from "react"
import NotFound from "./notFound/NotFound"
import WeatherInfo from "./weatherInfo/WeatherInfo"

const WeatherOutput = ({ data, notFound }) => {
   return <div>{notFound ? <NotFound /> : <WeatherInfo data={data} />}</div>
}

export default WeatherOutput
