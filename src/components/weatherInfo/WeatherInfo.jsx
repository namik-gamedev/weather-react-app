import React from 'react';
import styles from './WeatherInfo.module.css'

const WeatherInfo = ({ data }) => {
   return (
      <div className={styles.content}>
         <h2>{data.name}</h2>
         <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt=""
            className={styles.img}
         />
         <div className={styles.temp}>{(data.main.temp).toFixed(1)} °C</div>
         <div className={styles.feelsLike}>{`Ощущается как ${(data.main.feels_like).toFixed(1)} °C`}</div>
         <div className={styles.weather}>{data.weather[0].description}</div>
         <div className={styles.bottomContent}>
            <div><i className='fa-solid fa-wind icon'></i> {(data.wind.speed).toFixed(1)} м/сек</div>
            <div><i className='fa-solid fa-water icon'></i> {(data.main.humidity).toFixed(1)} %</div>
         </div>
      </div>
   );
};

export default WeatherInfo;