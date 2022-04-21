//jshint esversion:6

// Copy text of one file to another
// const fs = require('fs');
// fs.copyFileSync("file1.txt", "file2.txt");

var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperheroName = superheroes.random();
var mySupervillainName = supervillains.random();

console.log("superhero: " +mySuperheroName + "   supervillain: " + mySupervillainName);
 