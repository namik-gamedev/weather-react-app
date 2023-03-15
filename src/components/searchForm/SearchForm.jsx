import React, { useState } from 'react'
import styles from './SearchForm.module.css'
import 'font-awesome/css/font-awesome.min.css'

const SearchForm = ({ setLocation }) => {
   const [inputValue, setInputValue] = useState('')

   return (
      <form
         onSubmit={(e) => {
            e.preventDefault()
            setLocation(inputValue)
         }}
         className={styles.form}
      >
         <i className='fa-solid fa-location-dot icon'></i>
         <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Ваше местоположение'
            className={styles.input}
            type='text'
         />
         <button type='submit' className={styles.btn}>
            <i className='fa-solid fa-magnifying-glass icon'></i>
         </button>
      </form>
   )
}

export default SearchForm
