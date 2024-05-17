const convertToCelsius = function(temp) {
  let cel = (temp - 32) * (5/9);
  let rounded = Math.round(cel*10)/10;
  return rounded;
};

const convertToFahrenheit = function(temp) {
  let far = (temp * (9/5) +32);
  let rounded = Math.round(far*10)/10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
