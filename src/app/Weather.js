export class Weather {
  constructor(city, countryCode) {
    this.apiKey = "f85fbd380edfb307b2efc67e56369258";
    this.city = city;
    this.countryCode = countryCode;
  }
  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=f85fbd380edfb307b2efc67e56369258&units=metric`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }
  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
