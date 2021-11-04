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

// Destruct team1 and team2 properties from game
const { team1: team1Name, team2: team2Name } = game;
console.log(team1Name, team2Name);

// Destruct players array into two separate arrays
const [players1, players2] = game.players;
console.log(players1, players2);

// Create variable gk for first player, while the rest goes into fieldPlayers
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// Combine all players into an array
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Create a final array of players for team1 including three additional substitutes
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// Destruct a nested object's properties into three variables and have one of them use a different var name
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// A function that uses the rest pattern to accept multiple parameters and then uses spread to display the data
const printGoals = function (...playerNames) {
  console.log(`Goals Scored: ${playerNames.length}`);
  console.log('Scored By Players: ');
  console.log(...playerNames);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// Using short-circuiting to print which team wins. When text is printed that is the team that won
// Rule is: Lower the odds == the winner
team1 < team2 && console.log('Team 1 is more likely to win.');
team2 < team1 && console.log('Team 2 is more likely to win.');
