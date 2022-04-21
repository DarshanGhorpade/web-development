
const express = require("express");

const app = express();

const port = 3000;

app.get("/", function(req, res) {
    // console.log(req);
    res.send("<h1>Hello World!</h1>");
});

app.get("/about", function(req, res) {
   res.send("<h3>Hello there, my name is Darshan and I love to code.</h3>") 
});

app.get("/contact", function(req, res) {
    res.send("<h3>Contact me at: mr.darshanghorpade@gmail.com</h3>")
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Youtube</li><li>Code</li></ul>")
});

app.listen(port, function() {
    console.log(`app listening on port ${port}`);
});