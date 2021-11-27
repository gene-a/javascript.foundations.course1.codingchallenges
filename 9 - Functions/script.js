'use strict';
const poll = {
  question: `What is your favorite programming language?`,
  options: [`JavaScript`, `Python`, `Rust`, `C++`],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let displayMessage = this.question + `\n`;
    for (const [index, language] of poll.options.entries()) {
      displayMessage += `${index + ' : ' + language + '\n'}`;
    }
    displayMessage += `(Write option number)`;

    const input = Number(window.prompt(displayMessage, ''));
    if (input >= 0) {
      if (input >= 0 && input < this.answers.length) {
        this.answers[input] += 1;
        this.displayResults();
      } else {
        window.alert(`Invalid input!`);
        return;
      }
    } else {
      window.alert(`Invalid input!`);
      return;
    }
  },
  displayResults(type = `array`) {
    switch (type) {
      case `string`:
        console.log(`Poll results are: ${[...this.answers]}`);
        break;
      case `array`:
        console.log(...this.answers);
        break;
    }
  },
};

document
  .querySelector(`.poll`)
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

// Bonus round on using bind
const testDataObject1 = {
  answers: [5, 2, 3],
};
const mutatedDisplayResults1 = poll.displayResults.bind(testDataObject1);
mutatedDisplayResults1(`string`);
mutatedDisplayResults1();

const testDataObject2 = {
  answers: [1, 5, 3, 9, 6, 1],
};
const mutatedDisplayResults2 = poll.displayResults.bind(testDataObject2);
mutatedDisplayResults2(`string`);
mutatedDisplayResults2();
