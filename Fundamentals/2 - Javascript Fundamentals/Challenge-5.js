// Array input
// Logs a string from input
// Returns nothing

const printForecast = function (temps) {
  let output = "";
  if (Array.isArray(temps)) {
    for (let i = 0; i < temps.length; i++) {
      let days = i + 1;
      output += `${temps[i] + "C in " + days + "day(s) ... "}`;
    }
    console.log(output);
  }
};

const challenge6Case1 = function () {
  printForecast([17, 21, 23]);
};

const challenge6Case2 = function () {
  printForecast([12, 5, -5, 0, 4]);
};

challenge6Case1();
challenge6Case2();
