// functions with parameters in JavaScript

// Creating function
function getMilk(money, costPerBottle) {
    console.log("LeaveHouse");
    console.log("MoveRight");
    console.log("MoveRight");
    console.log("MoveUp");
    console.log("MoveUp");
    console.log("MoveUp");
    console.log("MoveRight");
    console.log("MoveRight");
    console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of milk.");
    return calcChange(money, costPerBottle);
}

function calcBottles(startingAmount, costPerBottle){
    return Math.floor(startingAmount / costPerBottle);
}

function calcChange(startingAmount, costPerBottle) {
    return startingAmount % costPerBottle;
}

// Calling function
var change = getMilk(4, 1.5);    //change = 1
console.log("Keep the change " + change + " rupees");