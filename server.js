const path = require("path");
const express = require("express");
const hbs = require("express-handlebars");

const app = express();

const { fetchCurrentWeatherData } = require("./apifetch");
const { getWindDirection } = require("./public/src/utils/outputUtils");
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "public")));
app.engine(".hbs", hbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.get("/newyork", async (req, res) => {
  fetchCurrentWeatherData("New York")
    .then(response => {
      console.log(response);
      res.render("pages/newyork", {
        main: response.weather[0].main,
        temp: response.main.temp,
        humidity: response.main.humidity,
        wind: response.wind.speed,
        windDir: getWindDirection(response.wind.deg)
      });
    })
    .catch(err => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
