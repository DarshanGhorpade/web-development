//jshinf esversion: 6

const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const https = require("https");

const app = express();

const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {

    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

    // console.log(firstName, lastName, email);

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/76aa3cbd87";

    const options = {
        method: "POST",
        auth: "Darshan9834:975701871b308f0cb79feddc7023bfb5-us14",
    };

    const request = https.request(url, options, function(response) {

        if(response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data) {
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end();
});

app.post("/success", function(req, res) {
    res.redirect("/");
});

app.post("/failure", function(req, res) {
    res.redirect("/");
});

app.listen(port, function() {
    console.log(`app listening on port ${port}`);
});

// API Key
// 975701871b308f0cb79feddc7023bfb5-us14

// List Id
// 76aa3cbd87