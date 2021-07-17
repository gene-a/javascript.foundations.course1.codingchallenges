'use strict';

const main = function () {
  const limit = 20;
  let currentScore = 0;
  let secretNumber = 0;
  let highscore = 0;
  let isGameWon = false;

  const updateNumber = function (text) {
    document.querySelector('.number').textContent = text;
  };

  const updateMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  const updateBackgroundColor = function (color) {
    document.querySelector('body').style.background = color;
  };

  const init = function () {
    updateMessage('Start guessing...');
    updateBackgroundColor('#222');
    document.querySelector('.secret').textContent = limit;
    document.querySelector('.score').textContent = limit;
    document.querySelector('.guess').value = 0;

    currentScore = limit;
    secretNumber = Math.trunc(Math.random() * limit);
    isGameWon = false;
    updateNumber('?');
  };

  const decreaseScore = function () {
    currentScore -= 1;
    if (currentScore > 0) {
      document.querySelector('.score').textContent = currentScore;
    } else {
      document.querySelector('.score').textContent = 0;
      updateMessage('You lose! 😞 Try again! 💪🏽');
    }
  };

  const onClickAgainButton = function () {
    init();
  };

  const onClickCheckButton = function () {
    if (!isGameWon) {
      let currentInput = document.querySelector('.guess').value;
      const parsed = parseInt(currentInput);

      if (isNaN(parsed) || !parsed) {
        // if NaN
        updateMessage('Invalid input! 😭');
      } else if (parsed !== secretNumber) {
        // else if number is less or greater
        let message =
          parsed < secretNumber
            ? 'Too low! Try again! 🤔'
            : 'Too high! Try again! 🤔';
        updateMessage(message);
        decreaseScore();
      } else if (parsed === secretNumber) {
        // else if number is equal
        updateMessage('You got it! 🙌🏽');
        updateBackgroundColor('#60b347');
        updateNumber(secretNumber);

        // update highscore
        if (currentScore > highscore) {
          highscore = currentScore;
          document.querySelector('.highscore').textContent = highscore;
        }
        isGameWon = true;
      }
    } else {
      init();
    }
  };

  document
    .querySelector('.check')
    .addEventListener('click', onClickCheckButton);
  document
    .querySelector('.again')
    .addEventListener('click', onClickAgainButton);
  document.querySelector('.highscore').textContent = highscore;

  return {
    init: init,
  };
};

main().init();
