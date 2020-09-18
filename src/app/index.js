const { Weather } = require("./Weather");
const { UI } = require("./UI");
const { Store } = require("./Store");
const store = new Store();
const ui = new UI();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);

console.log(weather);
require("./index.css");
async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  ui.render(data);
}
document.addEventListener("DOMContentLoaded", fetchWeather);
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const contryCode = document.getElementById("Country Code").value;
  weather.changeLocation(city, contryCode);
  store.setLocationData(city, countryCode);
  fetchWeather();
  e.preventDefault();
});
