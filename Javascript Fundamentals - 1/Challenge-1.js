// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

let computeBmi = function(mass, height) {
    let result = 0;
    if (mass > 0 && typeof mass === 'number' && height > 0 && typeof height === 'number') {
        result = (mass / (height ** 2));
    }
    return result;
};

let leftGreaterThanRight = function (left, right) {
    return left > right;
};

let runCase = function(markHeight, markWeight, johnHeight, johnWeight) {
    const markBmi = computeBmi(markWeight, markHeight);
    const johnBmi = computeBmi(johnWeight, johnHeight);
    return {
        markBmi: markBmi,
        johnBmi: johnBmi,
        isMarkHigherBmi: leftGreaterThanRight(markBmi, johnBmi)
    }
};

let challenge1LogResults = function(markBmi, johnBmi, isMarkHigherBmi) {
    console.log(`Mark BMI: ${markBmi}. John BMI: ${johnBmi}. Is Mark's BMI higher than John's?: ${isMarkHigherBmi}`);
};

let challenge1Case1 = function() {
    const markHeight = 1.69, markWeight = 78;
    const johnHeight = 1.95, johnWeight = 92;
    const result = runCase(markHeight, markWeight, johnHeight, johnWeight);

    const markBmi = result.markBmi;
    const johnBmi = result.johnBmi;
    const isMarkHigherBmi = result.isMarkHigherBmi;
    challenge1LogResults(markBmi, johnBmi, isMarkHigherBmi);
};

let challenge1Case2 = function() {
    const markHeight = 1.88, markWeight = 95;
    const johnHeight = 1.76, johnWeight = 85;

    const result = runCase(markHeight, markWeight, johnHeight, johnWeight);

    const markBmi = result.markBmi;
    const johnBmi = result.johnBmi;
    const isMarkHigherBmi = result.isMarkHigherBmi;
    challenge1LogResults(markBmi, johnBmi, isMarkHigherBmi);
};

challenge1Case1();
challenge1Case2();