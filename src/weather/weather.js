import UI from "../UI/UI";
import KEYS from '../apiKeys';

export default class Weather {
  static async fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEYS.WEATHER}`);
    const data = await response.json();
    UI.createWhatherBoard(
      data.main.temp,
      data.main.humidity,
      data.main.pressure,
      data.weather[0].description,
    );
  }
}
