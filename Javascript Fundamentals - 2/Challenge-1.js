// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'),

// Each team competes 3 times
// Average of the three scores is calculated (one average score per team)
// A team only wins if it has at least double the average score of the other team. Otherwise no one wins

const calcAverage = function(x, y, x) {
    return (x + y + z) / 3;
};

const doubleAverage = function(avg) {
    return avg * 2;
};

const logWinner = function(teamName, winningScore, losingScore) {
    console.log(`${teamName} Win (${winningScore} to ${losingScore})`);
};

const checkWinner = function(koalasAvg, dolphinsAvg) {
    if (koalasAvg >= doubleAverage(dolphinsAvg)) {
        logWinner("Koalas", koalasAvg, dolphinsAvg);
    } else if (dolphinsAvg >= doubleAverage(koalasAvg )) {
        logWinner("Dolphins", dolphinsAvg, koalasAvg);
    } else {
        console.log("No one wins!");
    }
};

const challenge1Case1 = function() {
    const dolphinsAvg = calcAverage(44, 23, 71);
    const koalasAvg = calcAverage(65, 54, 49);

    checkWinner(koalasAvg, dolphinsAvg);
};

const challenge1Case2 = function() {
    const dolphinsAvg = calcAverage(85, 54, 41);
    const koalasAvg = calcAverage(23, 34, 27);

    checkWinner(koalasAvg, dolphinsAvg);
};