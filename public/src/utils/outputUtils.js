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
  } else if (deg >= 191.25 && deg < 236.26) {
    return "West";
  } else if (deg >= 281.25 && deg < 303.75) {
    return "North West";
  } else {
    return deg;
  }
}

module.exports = {
  getWindDirection: getWindDirection
};
