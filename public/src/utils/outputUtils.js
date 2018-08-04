function getWindDirection(deg) {
  if (deg >= 303.75 || deg < 11.25) {
    return "North";
  } else if (deg >= 11.25 && deg < 78.75) {
    return "North East";
  } else if (deg >= 78.75 && deg < 146.25) {
    return "East";
  } else if (deg >= 146.25 && deg < 168.75) {
    return "South East";
  } else if (deg >= 168.75 && deg < 191.25) {
    return "South";
  } else if (deg >= 191.25 && deg < 236.26) {
    return "South West";
  } else if (deg >= 236.26 && deg < 281.25) {
    return "West";
  } else if (deg >= 281.25 && deg < 303.75) {
    return "North West";
  } else {
    return deg;
  }
}

function getImagePath(location) {
  switch (location) {
    case "New York":
      return "../../assets/images/newyork1.jpg";
    case "Sydney":
      return "../../assets/images/sydney1.jpg";
    case "London":
      return "../../assets/images/london1.jpg";
    case "Hong Kong":
      return "../../assets/images/hongkong1.jpg";
    case "Tokyo":
      return "../../assets/images/tokyo1.jpg";
    default:
      return "../../assets/images/default.jpg";
  }
}

module.exports = {
  getWindDirection,
  getImagePath
};
