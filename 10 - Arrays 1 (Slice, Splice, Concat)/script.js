'use strict';
// IIFE
(function () {
  let juliaData = {
    testCase1: [3, 5, 2, 12, 7],
    testCase2: [9, 16, 6, 8, 3],
  };

  let kateData = {
    testCase1: [4, 1, 15, 8, 3],
    testCase2: [10, 5, 6, 1, 4],
  };

  const displayDogAges = function (data) {
    // Loop over map
    data.forEach(function (ages, dataSourceName) {
      // Loop over data and determine if the dog is a puppy (age < 3, else adult dog)
      ages.forEach(function (age, index) {
        console.log(
          `${dataSourceName}: Dog number ${index + 1} is ${
            age >= 3 ? `an adult and is ${age} year(s) old` : `still a puppy 🐶`
          }`
        );
      });
    });
  };

  const checkDogs = function (dogAgesJulia, dogAgesKate) {
    // Julia's first and last two elements are incorrect
    // Creating shallow copy and removing elements
    // Creating function scoped variables as mutating param values directly is bad practice
    let sanitizedJuliaData = dogAgesJulia.slice(1);
    sanitizedJuliaData = sanitizedJuliaData.slice(
      0,
      sanitizedJuliaData.length - 2
    );
    const kateData = [...dogAgesKate];

    // Alternate solution for removing elements for julia's data:
    // const sanitizedJuliaData = dogsJulia.slice();
    // dogsJulia.splice(0, 1);
    // dogsJulia.splice(-2);

    // Display dog ages
    displayDogAges(
      new Map([
        [`Julia`, sanitizedJuliaData],
        [`Kate`, kateData],
      ])
    );
  };

  checkDogs(juliaData.testCase1, kateData.testCase1);
  checkDogs(juliaData.testCase2, kateData.testCase2);
})();
