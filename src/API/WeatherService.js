export default class WeatherService {
   static async getAll(location) {
      const APIKey = '4d67c31bae28a10a82aca0b53cb46669'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=ru&appid=${APIKey}`
      const response = await fetch(url)
      return response
   }
}