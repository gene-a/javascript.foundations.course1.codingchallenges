const calcTip = function(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    }
    return bill * 0.20;
}

const challenge2Case1 = function() {
    const bills = [125, 555, 44];
    const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
    console.log(`Bills: ${bills}`);
    console.log(`Tips: ${tips}`);
}

challenge2Case1();