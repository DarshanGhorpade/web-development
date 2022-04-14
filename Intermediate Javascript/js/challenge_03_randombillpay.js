
// Write a function which will select random name from a list of names. The person selected will have to pay
// for everybodys food bill


names = ["Darshan", "Ajay", "Aman", "Akshay", "Arun"];

function whoIsPaying(names){
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}

console.log(whoIsPaying(names));