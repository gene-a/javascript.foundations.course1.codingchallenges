'use strict';
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Looping over game.scored to print values and index
for (const [index, playerName] of game.scored.entries()) {
  console.log(`Goal ${index}: ${playerName}`);
}

// With the loop, we calcualte the average odds and log it to the console
let avgOdds = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  avgOdds += odd;
}
avgOdds = avgOdds / odds.length;
console.log(avgOdds);

// Print the odds to the console but use a template to format it
const [team1PropertyName, team2PropertyName] = Object.keys(game); // Given that the first two properties are the team name properties
const teamNameProperties = [team1PropertyName, team2PropertyName, 'x'];
console.log(
  `Odd of victory ${game.team1}: ${game?.odds[teamNameProperties[0]]}`
);
console.log(`Odd of victory draw: ${game?.odds[teamNameProperties[2]]}`);
console.log(
  `Odd of victory ${game.team2}: ${game?.odds[teamNameProperties[1]]}`
);

// Alternate solution to print odds but with template
for (const [key, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${key === 'x' ? 'draw' : 'victory'} ${
      key === 'x' ? '' : game[key]
    }: ${value}`
  );
}

// Dynamically create an object through code
const scorers = {};
const scores = [
  ['Gnarby', 1],
  ['Hummels', 1],
  ['Lewandowski', 2],
];
for (const [scorerName, score] of scores) {
  scorers[[scorerName]] = score;
}
console.log(scorers);
