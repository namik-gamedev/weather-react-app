export default class DataFetching {
   static async fetchData(response) {
      let data
      try {
         data = await response.json()
      } catch {
         return [{}, true, false]
      }
      // OpenWeather возвращает cod как число 404 или строку '404', а при неверном ключе — 401
      const notFound = data.cod === '404' || data.cod === 404 || data.cod === 401 || !data.weather
      const isNight = notFound ? false : String(data.weather[0].icon).endsWith('n') // если notFound, не получится взять data.weather[0].icon, поэтому присваивается false

      return [data, notFound, isNight]
   }
}

