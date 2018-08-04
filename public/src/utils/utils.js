const { fetchCurrentWeatherData } = require("./apifetch.js");
const { getImagePath, getWindDirection } = require("./outputUtils.js");

const fetchData = (location, page, res) => {
  return fetchCurrentWeatherData(location)
    .then(response => {
      res.render(page, {
        city: location,
        img: getImagePath(location),
        main: response.weather[0].main,
        temp: response.main.temp,
        humidity: response.main.humidity,
        wind: response.wind.speed,
        windDir: getWindDirection(response.wind.deg)
      });
    })
    .catch(err => console.log(err));
};

module.exports = {
  fetchData
};
