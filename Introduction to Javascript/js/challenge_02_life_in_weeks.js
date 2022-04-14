// Write a function which takes age as parameter and calculate how many days weeks and months remaining if we live for 90 years

function lifeInWeeks(age){
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks and " + months +" months left.")
}

lifeInWeeks(89);