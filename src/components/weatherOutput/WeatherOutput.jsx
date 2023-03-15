import React from 'react'
import { useQuery } from 'react-query'
import WeatherService from '../../API/WeatherService'
import Loader from '../loader/Loader'
import NotFound from '../notFound/NotFound'
import WeatherInfo from '../weatherInfo/WeatherInfo'

async function fetchData(location) {
   const response = await WeatherService.getAll(location)
   const data = response.data
   return data
}

const WeatherOutput = ({ location, setIsNight }) => {
   const { data, isLoading, isError } = useQuery(['weather', location], () => fetchData(location), {
      onSuccess: (data) => {
         setIsNight(data.weather[0].icon.endsWith('n'))
      },
      retry: 0,
   })

   if (isLoading) {
      return <Loader />
   }

   if (isError) {
      return <NotFound />
   }

   return <WeatherInfo data={data} />
}

export default WeatherOutput
