'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const displaySanitizedText = function (inputValue) {
  const values = inputValue.split('\n');

  for (const [valueIndex, value] of values.entries()) {
    let [outputString, ...restOfString] = value.trim().split('_');
    outputString = outputString.toLowerCase();
    for (let i = 0; i < restOfString.length; i++) {
      outputString +=
        restOfString[i][0].toUpperCase() +
        restOfString[i].slice(1).toLowerCase();
    }
    let outputPaddedSpace = outputString.padEnd(30, ' ');
    let outputPaddedCheck = outputPaddedSpace.padEnd(
      outputPaddedSpace.length + valueIndex + 1,
      '✅'
    );

    // alternate solution
    // let outputPaddedCheck = outputPaddedSpace + '✅'.repeat(valueIndex + 1);

    console.log(outputPaddedCheck);
  }
};

const onButtonClick = function () {
  const button = document.querySelector('button');
  button.addEventListener('click', function () {
    displaySanitizedText(document.querySelector('textarea').value);
  });
};

onButtonClick();

// Test Cases
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// a_b
