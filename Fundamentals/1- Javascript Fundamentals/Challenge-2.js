let challenge2LogResults = function(markBmi, johnBmi, isMarkHigherBmi) {
    console.log(`Mark BMI: ${markBmi}. John BMI: ${johnBmi}. Is Mark's BMI higher than John's?: ${isMarkHigherBmi}`);
    let message = `John's BMI is greater than Mark's`;
    if (markBmi > johnBmi) {
        message = `Mark's BMI is greater than John's`;
    }
    console.log(message);
};

let challenge2Case1 = function() {
    const markHeight = 1.69, markWeight = 78;
    const johnHeight = 1.95, johnWeight = 92;
    const result = runCase(markHeight, markWeight, johnHeight, johnWeight);

    const markBmi = result.markBmi;
    const johnBmi = result.johnBmi;
    const isMarkHigherBmi = result.isMarkHigherBmi;
    challenge2LogResults(markBmi, johnBmi, isMarkHigherBmi);
};

let challenge2Case2 = function() {
    const markHeight = 1.88, markWeight = 95;
    const johnHeight = 1.76, johnWeight = 85;

    const result = runCase(markHeight, markWeight, johnHeight, johnWeight);

    const markBmi = result.markBmi;
    const johnBmi = result.johnBmi;
    const isMarkHigherBmi = result.isMarkHigherBmi;
    challenge2LogResults(markBmi, johnBmi, isMarkHigherBmi);
};

challenge2Case1();
challenge2Case2();