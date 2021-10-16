const mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    bmi: 0,
    calcBmi: function() {
        if(this.bmi) return;
        this.bmi = this.mass / (this.height ** 2);
    }
};

const john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function() {
        if(this.bmi) return;
        this.bmi = this.mass / (this.height ** 2);
    }
};

const challenge3 = function() {
    mark.calcBmi();
    john.calcBmi();
    
    let first = mark.name, second = john.name;
    let firstBmi = mark.bmi, secondBmi = john.bmi;

    if (john.bmi > mark.bmi) {
        first = john.name;
        firstBmi = john.bmi;
        second = mark.name;
        secondBmi = mark.bmi;
    } 
    console.log(`${first}'s BMI (${firstBmi}) is higher than ${second}'s BMI (${secondBmi})!`)
}
challenge3();