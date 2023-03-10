import React, { useMemo, useState, useEffect } from "react"
import "./App.css"
import Loader from "./components/loader/Loader"
import SearchForm from "./components/searchForm/SearchForm"
import DataFetching from "./tools/DataFetching"
import WeatherService from "./API/WeatherService"
import WeatherOutput from "./components/WeatherOutput"

function App() {
   const [isLoading, setIsLoading] = useState(false)
   const [dataNotFound, setDataNotFound] = useState(false)
   const [weatherData, setWeatherData] = useState({})
   const [isNight, setIsNight] = useState(false)

   useEffect(() => {
      const location = JSON.parse(localStorage.getItem("location"))
      if (location) fetchData(location)
   }, [])

   async function fetchData(location) {
      if (location === "") {
         return
      }

      setIsLoading(true)

      const response = await WeatherService.getAll(location)
      const [data, notFound, isNight] = await DataFetching.fetchData(response)
      setWeatherData(data)
      setDataNotFound(notFound)
      setIsNight(isNight)

      setIsLoading(false)

      if (!notFound) {
         localStorage.setItem("location", JSON.stringify(location))
      }
   }

   return (
      <div className={isNight ? "App night" : "App"}>
         <div className='container'>
            <SearchForm fetchData={fetchData} />
            {isLoading ? (
               <Loader />
            ) : (
               Object.keys(weatherData).length > 0 && (
                  <WeatherOutput data={weatherData} notFound={dataNotFound} />
               )
            )}
         </div>
      </div>
   )
}

export default App
