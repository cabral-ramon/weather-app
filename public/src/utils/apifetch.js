const axios = require("axios");
const URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const APIKEY = process.env.APIKEY || require("./secrets.json").APIKEY;
const PARAMOPTIONS = "&units=imperial";

function fetchCurrentWeatherData(location = "London") {
  return new Promise((resolve, reject) => {
    axios
      .get(`${URL}${location}${APIKEY}${PARAMOPTIONS}`)
      .then(data => {
        return resolve(data.data);
      })
      .catch(err => reject(err));
  });
}

module.exports = {
  fetchCurrentWeatherData
};
