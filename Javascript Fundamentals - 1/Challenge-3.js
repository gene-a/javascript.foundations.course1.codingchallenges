const firstParamWinCode = 1;
const secondParamWinCode = 2;
const drawWinCode = 3;
const noWinCode = -1;

const getAverageOf3Scores = function(score1, score2, score3) {
    return (score1 + score2 + score3) /3;
};

const compareAverages = function(total1, total2) {
    if (total1 > total2) {
        return firstParamWinCode;
    } else if(total1 < total2) {
        return secondParamWinCode;
    } else if (total1 === total2) {
        return drawWinCode;
    } else {
        return noWinCode;
    }
};

const getWinner = function(total1, total2) {
    const compareResult = compareAverages(total1, total2);
    if (compareResult === 1 && total1 >= 100 ) {
        return compareResult;
    } else if(compareResult === 2 && total2 >= 100) {
        return compareResult;
    } else if (compareResult === 3 && total1 >= 100 && total2 >= 100){
        return compareResult;
    } else {
        return compareResult;
    }
};

const challenge3Case1 = function() {
    const koalasAvg = getAverageOf3Scores(88, 91, 110);
    const dolphinsAvg = getAverageOf3Scores(96, 108, 90);
    const winner = getWinner(koalasAvg, dolphinsAvg);

    if (winner === firstParamWinCode) {
        console.log("Koalas win!");
    } else if (winner === secondParamWinCode) {
        console.log("Dolphins win!");
    } else if (winner === drawWinCode) {
        console.log("It's a draw!");
    } else if (winner === noWinCode) {
        console.log("Nobody wins...")
    }
}

const challenge3Case2 = function() {
    const koalasAvg = getAverageOf3Scores(109, 95, 123);
    const dolphinsAvg = getAverageOf3Scores(97, 112, 101);
    const winner = getWinner(koalasAvg, dolphinsAvg);

    if (winner === firstParamWinCode) {
        console.log("Koalas win!");
    } else if (winner === secondParamWinCode) {
        console.log("Dolphins win!");
    } else if (winner === drawWinCode) {
        console.log("It's a draw!");
    } else if (winner === noWinCode) {
        console.log("Nobody wins...")
    }
}

const challenge3Case3 = function() {
    const koalasAvg = getAverageOf3Scores(109, 95, 106);
    const dolphinsAvg = getAverageOf3Scores(97, 112, 101);
    const winner = getWinner(koalasAvg, dolphinsAvg);

    if (winner === firstParamWinCode) {
        console.log("Koalas win!");
    } else if (winner === secondParamWinCode) {
        console.log("Dolphins win!");
    } else if (winner === drawWinCode) {
        console.log("It's a draw!");
    } else if (winner === noWinCode) {
        console.log("Nobody wins...")
    }
}

challenge3Case1();
challenge3Case2();
challenge3Case3();