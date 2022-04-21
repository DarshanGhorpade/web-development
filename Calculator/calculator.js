
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res) {
    // console.log(__dirname);
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("The result of calculation is " + result);
    console.log(req.body);
});

app.post("/bmicalculator", function(req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = (weight / (height * height));

    res.send("Your BMI is " + bmi);
    console.log(req.body);
});

app.listen(port, function() {
    console.log(`app listening on port ${port}`);
});