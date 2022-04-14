// BMI calculator

function bmiCalculator(weight, height){
    var bmi = weight / (Math.pow(height, 2));
    return Math.round(bmi);
}

console.log(bmiCalculator(50, 1.5));