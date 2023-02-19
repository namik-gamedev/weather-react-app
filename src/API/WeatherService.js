export default class WeatherService {
   static async getData(location) {
      const APIKey = '728b0ee6df5687559812bd3169ad77b7'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=ru&appid=${APIKey}`
      const response = await fetch(url)
      return response
   }
}