import React from 'react';
import styles from './NotFound.module.css'

const NotFound = () => {
   return (
      <div className={styles.content}>
         <h2>Ошибка <br /> 404</h2>
         <p>Местоположение не найдено</p>
      </div>
   );
};

export default NotFound;