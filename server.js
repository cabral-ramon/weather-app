const path = require("path");
const express = require("express");
const hbs = require("express-handlebars");

const app = express();

const { fetchData } = require("./public/src/utils/utils");

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

app.get("/weather/:city", async (req, res) => {
  fetchData(req.params.city, "pages/weather", res);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
