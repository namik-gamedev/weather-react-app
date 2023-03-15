import React, { useState } from 'react'
import './App.css'
import SearchForm from './components/searchForm/SearchForm'
import WeatherOutput from './components/weatherOutput/WeatherOutput'

function App() {
   const [location, setLocation] = useState('')
   const [isNight, setIsNight] = useState(false)

   return (
      <div className={isNight ? 'App night' : 'App'}>
         <div className='container'>
            <SearchForm setLocation={setLocation} />
            <WeatherOutput location={location} setIsNight={setIsNight} />
         </div>
      </div>
   )
}

export default App
