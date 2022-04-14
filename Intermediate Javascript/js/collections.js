// Collections in JavaScript

var guestList = ["Darshan", "Aman", "Piyush", "Anupam", "Gazal", "Namita"];
// console.log(guestList.length)

var guestName = prompt("What is your name?");

if(guestList.includes(guestName)){
    alert("Welcome "+ guestName);
}else{
    alert("Sorry, maybe next time.");
}