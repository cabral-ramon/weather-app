const { fetchCurrentWeatherData } = require("./apifetch.js");
const { getImagePath, getWindDirection } = require("./outputUtils.js");

const fetchData = (location, page, res) => {
  return fetchCurrentWeatherData(location)
    .then(response => {
      res.render(page, {
        city: location,
        img: getImagePath(location),
        main: response.weather[0].main,
        iconUrl: `http://openweathermap.org/img/w/${
          response.weather[0].icon
        }.png`,
        temp: Math.ceil(response.main.temp),
        humidity: response.main.humidity,
        wind: Math.floor(response.wind.speed),
        windDir: getWindDirection(response.wind.deg)
      });
    })
    .catch(err =>
      res.render("pages/404", {
        error: `404 not found: Sorry we could not find information for ${location}`,
        imgUrl: "../../assets/images/404.jpg"
      })
    );
};

module.exports = {
  fetchData
};
