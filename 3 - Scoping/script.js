'use strict';

const firstName = 'Name';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    // Should display and get value from parent scope
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Reachable outside this block as var is function scoped
      var millenial = true;

      // Expression str will use the statement below as this variable is declared within the same block hence taking priority rendering the scope chain lookups unnecessary
      // const firstName = 'Something';

      // Reassigning outer variable means the call for output later will be using whatever I have defined here
      // output = "Something";

      const str = `Millenial! ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(output);

    // Should display as var is function scoped
    console.log(millenial);
    // Should be a reference error since functions are block scoped in ES6 strict mode
    // add(2,3);

    // Shouldn't display, const is at the scope level. This one is found in the inner scope (printAge if block)
    // console.log(str);
  }

  printAge();
  return age;
}

calcAge(1992);

// Shouldn't reach out of scope
// printAge();

// Shouldn't reach out of scope
// console.log(age);
