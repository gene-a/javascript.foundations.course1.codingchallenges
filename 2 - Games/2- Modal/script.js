'use strict';
const main = function () {
  const escKey = 'Escape';
  const modalButtons = document.querySelectorAll('.show-modal');
  const closeModalButton = document.querySelector('.close-modal');
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('.modal');

  const hasClass = function (element, className) {
    return element.classList.contains(className);
  };

  // Event handler for open
  const showModal = function () {
    if (hasClass(modal, 'hidden') && hasClass(overlay, 'hidden')) {
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    }
  };

  // Event handler for close click
  const closeModal = function () {
    if (!hasClass(modal, 'hidden') && !hasClass(overlay, 'hidden')) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  };

  // Event handler for click outside of modal (overlay click)
  const onOverlayClick = function () {
    closeModal();
  };

  // Event handler for esc key
  const onKeyEscPress = function (e) {
    if (e.key.toLowerCase() === escKey.toLowerCase()) {
      closeModal();
    }
  };

  const init = function () {
    // Attach click event to buttons
    for (let i = 0; i < modalButtons.length; i++) {
      modalButtons[i].addEventListener('click', showModal);
    }

    closeModalButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', function (e) {
      onKeyEscPress(e);
    });
  };

  return {
    init: init,
  };
};

main().init();
