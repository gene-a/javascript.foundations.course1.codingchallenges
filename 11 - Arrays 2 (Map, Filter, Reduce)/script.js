'use strict';
// IIFE
(function () {
  const testData = {
    data1: [5, 2, 4, 1, 15, 8, 3],
    data2: [16, 6, 10, 5, 6, 1, 4],
  };

  const calcAverageHumanAge = function (dogAges) {
    // Map
    // Creating a new array to contain human ages converted from dog ages
    const humanAges = dogAges.map(function (dogAge) {
      return dogAge <= 2 && dogAge > 0 ? 2 * dogAge : 16 + dogAge * 4;
    });

    // Filter
    // Dogs that are less than 18 years old are to be filtered out
    const filteredHumanAges = humanAges.filter(function (humanAge) {
      return humanAge >= 18;
    });

    // Reduce
    // Calculate average human age of all adult dogs
    const averageHumanAge = filteredHumanAges.reduce(function (
      acc,
      humanAge,
      _,
      humanAges
    ) {
      return acc + humanAge / humanAges.length; // We can directly compute for the average by dividing each element by the length of the array
    },
    0); // Initial acc is zero for computing averages

    return averageHumanAge;
  };

  console.log(`Test Data 1 Result: ${calcAverageHumanAge(testData.data1)}`);
  console.log(`Test Data 2 Result: ${calcAverageHumanAge(testData.data2)}`);
})();
