'use strict';

const main = function () {
  const activeSectionClass = 'player--active';
  const winnerSectionClass = 'player--winner';
  const hiddenClass = 'hidden';
  let isGameWon = false;
  let playerTurnScores = [0, 0];
  let playerTotalScores = [0, 0];
  let currentActivePlayer = 0;

  // Select elements
  const playerSectionEls = [
    document.querySelector('.player--0'),
    document.querySelector('.player--1'),
  ];
  const playerTurnScoreEls = [
    document.querySelector('#score--0'),
    document.querySelector('#score--1'),
  ];
  const playerTotalScoreEls = [
    document.querySelector('#current--0'),
    document.querySelector('#current--1'),
  ];

  const imgDiceEl = document.querySelector('.dice');
  const btnNew = document.querySelector('.btn--new');
  const btnRoll = document.querySelector('.btn--roll');
  const btnHold = document.querySelector('.btn--hold');

  const updateTurnScore = function (playerNumber, turnScore) {
    playerTurnScores[playerNumber] = turnScore;
    playerTurnScoreEls[playerNumber].textContent =
      playerTurnScores[playerNumber];
  };

  const updateTotalScore = function (playerNumber, totalScore) {
    playerTotalScores[playerNumber] += totalScore;
    playerTotalScoreEls[playerNumber].textContent =
      playerTotalScores[playerNumber];
  };

  const checkForWin = function (playerNumber) {
    if (playerTotalScores[playerNumber] >= 100) {
      // Win condition
      isGameWon = true;

      // Display win message
      playerSectionEls[playerNumber].classList.toggle(activeSectionClass);
      playerSectionEls[playerNumber].classList.toggle(winnerSectionClass);

      // Lock game
      imgDiceEl.classList.toggle('hidden');
    }
  };

  const switchActivePlayer = function (playerNumber) {
    playerSectionEls[playerNumber].classList.toggle(activeSectionClass);

    switch (playerNumber) {
      case 0:
        currentActivePlayer = playerNumber + 1;
        break;
      case 1:
        currentActivePlayer = playerNumber - 1;
        break;
    }

    playerSectionEls[currentActivePlayer].classList.toggle(activeSectionClass);
  };

  const onGameReset = function () {
    // Reset game
    isGameWon = false;

    // Reset scores
    playerTurnScores = [0, 0];
    playerTotalScores = [0, 0];

    // Redisplay scores
    for (
      let i = 0;
      i < playerTurnScores.length && i < playerTotalScores.length;
      i++
    ) {
      updateTurnScore(i, playerTurnScores[i]);
      updateTotalScore(i, playerTotalScores[i]);
      playerSectionEls[i].classList.remove(activeSectionClass);
      playerSectionEls[i].classList.remove(winnerSectionClass);
    }

    // Reset active player
    playerSectionEls[0].classList.toggle(activeSectionClass);

    // Hide dice
    if (!imgDiceEl.classList.contains(hiddenClass)) {
      imgDiceEl.classList.toggle(hiddenClass);
    }
  };

  // Roll dice
  const onBtnRollClick = function () {
    if (!isGameWon) {
      if (imgDiceEl.classList.contains(hiddenClass)) {
        imgDiceEl.classList.toggle(hiddenClass);
      }

      // Generate roll value
      let rollValue = Math.trunc(Math.random() * 6) + 1;

      // Display dice
      imgDiceEl.src = `dice-${rollValue}.png`;

      // Check if value 1, if yes switch to next player, reset turn score
      if (rollValue === 1) {
        updateTurnScore(currentActivePlayer, 0);
        switchActivePlayer(currentActivePlayer);
      } else {
        // If no continue rolling
        updateTurnScore(
          currentActivePlayer,
          rollValue + playerTurnScores[currentActivePlayer]
        );
      }
    }
  };

  // Save score for active player
  const onBtnHoldClick = function () {
    if (!isGameWon) {
      updateTotalScore(
        currentActivePlayer,
        playerTurnScores[currentActivePlayer]
      );
      updateTurnScore(currentActivePlayer, 0);

      checkForWin(currentActivePlayer);
      if (!isGameWon) {
        switchActivePlayer(currentActivePlayer);
      }
    }
  };

  // Initialize screen
  const init = function () {
    onGameReset();

    // Set events
    btnNew.addEventListener('click', onGameReset);
    btnRoll.addEventListener('click', onBtnRollClick);
    btnHold.addEventListener('click', onBtnHoldClick);
  };

  return {
    init: init,
  };
};

main().init();
