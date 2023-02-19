import React, { useMemo, useState, useEffect } from 'react';
import './App.css';
import Loader from './components/loader/Loader';
import NotFound from './components/notFound/NotFound';
import SearchForm from './components/searchForm/SearchForm';
import WeatherInfo from './components/weatherInfo/WeatherInfo';
import DataFetching from './tools/DataFetching';
import WeatherService from './API/WeatherService';

function App() {
   const [isLoading, setIsLoading] = useState(false)
   const [dataNotFound, setDataNotFound] = useState(false)
   const [weatherData, setWeatherData] = useState({})
   const [isNight, setIsNight] = useState(false)

   async function fetchData(location) {
      if (location === '') {
         return
      }

      setIsLoading(true)

      const response = await WeatherService.getAll(location)
      const [data, notFound, isNight] = await DataFetching.fetchData(response)
      setWeatherData(data)
      setDataNotFound(notFound)
      setIsNight(isNight)

      setIsLoading(false)
   }

   return (
      <div className={isNight ? 'App night' : 'App'}>
         <div className="container">
            <SearchForm fetchData={fetchData} />
            {isLoading
               ? < Loader />
               : Object.keys(weatherData).length > 0 &&
               (dataNotFound
                  ? <NotFound /> :
                  < WeatherInfo data={weatherData} />)
            }
         </div>
      </div>
   );
}

export default App;
