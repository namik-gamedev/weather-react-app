export default class DataFetching {
   static async fetchData(response) {
      const data = await response.json()
      const notFound = data.cod === '404'
      const isNight = notFound ? false : data.weather[0].icon.endsWith('n') // если notFound, не получится взять data.weather[0].icon, поэтому присваивается false

      return [data, notFound, isNight]
   }
}
