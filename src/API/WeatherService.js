export default class WeatherService {
   static async getAll(location) {
      const APIKey = process.env.REACT_APP_API_KEY
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=ru&appid=${APIKey}`
      const response = await fetch(url)
      return response
   }
}