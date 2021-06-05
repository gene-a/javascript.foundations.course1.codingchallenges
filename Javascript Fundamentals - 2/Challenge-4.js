const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [], totals = [];

const challenge4CalcTip = function(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    }
    return bill * 0.20;
};

const challenge4CalcAverage = function(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    result = result / arr.length;
    return result;
};

const challenge4 = function() {
    for (let i = 0; i < bills.length; i++) {
        tips.push(challenge4CalcTip(bills[i]));
        totals.push(bills[i] + tips[i]);
        console.log(`With bill ${bills[i]}, the tip is ${tips[i]}. Total is ${totals[i]}.`);
    }

    console.log(`Average of all tips is: ${challenge4CalcAverage(tips)} and average of all bills is ${challenge4CalcAverage(bills)}.`);
}

challenge4();