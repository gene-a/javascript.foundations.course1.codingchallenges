'use strict';

///////////////////////////////////////
// Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// https://developer.mozilla.org/en-US/docs/Web/API/console/dir
// displays an interactive list of the properties of the specified JavaScript object.
console.dir(booker);

///////////////////////////////////////
// More Closure Examples

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

// Explaining closures and IIFE
/*
    The below function "works" because of two concepts. First of IIFE, Second of Closures.
    
    Because of IIFE, we are able to invoke the function expression (i.e. a function with no name) immediately as soon as we declare it.
    This effictively invokes the function once and only once. IIFE's create a certain type of encapsulation that was not able to be achieved before ES6's let and const.

    Despite the fact that we are invoking the function immediately thus removing the function from the call stack, the callback function attached to the document body as
    a click function can still trigger and use the variable declared in the IIFE. The only way this is achievable is because of Closures.
    Closures effectively gives the capability for functions declared inside other functions to access the variables declared in its parent's scope.
    This is even if the function has been removed from the callstack.
    With this, even if the header variable is declared in the parent function, the callback function assigned to the higher-order function addEventListener, is still
    able to use it.
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
