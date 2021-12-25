'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'John Morris',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// IIFE
(function (accounts1) {
  const userAccounts = accounts1;

  // Elements
  const labelWelcome = document.querySelector('.welcome');
  const labelDate = document.querySelector('.date');
  const labelBalance = document.querySelector('.balance__value');
  const labelSumIn = document.querySelector('.summary__value--in');
  const labelSumOut = document.querySelector('.summary__value--out');
  const labelSumInterest = document.querySelector('.summary__value--interest');
  const labelTimer = document.querySelector('.timer');

  const containerApp = document.querySelector('.app');
  const containerMovements = document.querySelector('.movements');

  const btnLogin = document.querySelector('.login__btn');
  const btnTransfer = document.querySelector('.form__btn--transfer');
  const btnLoan = document.querySelector('.form__btn--loan');
  const btnClose = document.querySelector('.form__btn--close');
  const btnSort = document.querySelector('.btn--sort');

  const inputLoginUsername = document.querySelector('.login__input--user');
  const inputLoginPin = document.querySelector('.login__input--pin');
  const inputTransferTo = document.querySelector('.form__input--to');
  const inputTransferAmount = document.querySelector('.form__input--amount');
  const inputLoanAmount = document.querySelector('.form__input--loan-amount');
  const inputCloseUsername = document.querySelector('.form__input--user');
  const inputClosePin = document.querySelector('.form__input--pin');

  // Calculate and display movements/transactions function
  const displayMovements = function (movements) {
    movements.forEach(function (elem, index) {
      const movementType = elem < 0 ? 'withdrawal' : 'deposit';
      const elMovementRow = `<div class="movements__row">
       <div class="movements__type movements__type--${movementType}">${index} ${movementType}</div>
       <div class="movements__date">3 days ago</div>
       <div class="movements__value">${elem}€</div>
      </div>`;

      containerMovements.insertAdjacentHTML('afterbegin', elMovementRow);
    });
  };

  // Calculate and display total balance
  const displayBalance = function (movements, currency) {
    const balance = movements.reduce(function (acc, movement) {
      return acc + movement;
    }, 0); // Since we're calculating totals, accumulator is 0

    // Setting the balance text, precision to zero
    labelBalance.textContent = `${balance.toPrecision(2)} ${currency}`;
  };

  // Function for adding the username property to the account object
  const generateUserNameProperty = function (accounts) {
    accounts.map(function (account) {
      account.userName = account.owner
        .toLowerCase()
        .split(' ')
        .reduce(function (acc, namePart) {
          // (first character of first name(s) and last name)
          return acc + namePart.slice(0, 1);
        }, ''); // Empty string accumulator
    });
  };

  /* TODO: Calculate, Display summary (bottom part of screen where in/out/interest is displayed) 
         incomes is total of everything beyond 0, out is everything under 0
         for interest we only apply the interest to deposits (mov > 0) we multiply by 1.2/100 we exclude interest under 1
  */
  const displaySummary = function (movements) {
    const movementsOverZero = movements.filter(function (movement) {
      return movement > 0;
    });

    const incomeTotal = movementsOverZero.reduce(function (acc, movement) {
      return acc + movement;
    }, 0);

    const outTotal = movements
      .filter(function (movement) {
        return movement < 0;
      })
      .reduce(function (acc, movement) {
        return acc + movement;
      }, 0);

    const interestTotal = movementsOverZero
      .map(function (movement) {
        return (movement * 1.2) / 100;
      })
      .filter(function (movement) {
        return movement > 0;
      })
      .reduce(function (acc, movement) {
        return acc + movement;
      }, 0);

    // TODO: Change display text
  };

  const init = function () {
    // TODO: For testing we display everything just on account 1
    displayMovements(accounts[0].movements);
    displayBalance(accounts[0].movements, '€');
    generateUserNameProperty(accounts);
    accounts.forEach(function (account) {
      console.log(account.userName);
    });
  };

  return {
    init: init,
  };
})(accounts).init();
