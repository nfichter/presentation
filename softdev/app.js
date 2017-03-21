var express = require("express");
var path = require("path");

var port = 5000;
var app = express(); //similar to app = Flask(__name__);

app.use(express.static("static")); //allows you to get static files and use them in your app

/*
next few lines are similar to:

@app.route("/", methods=["GET"])
def some_function();
*/

app.get("/", function(req, res) {
    res.send("<a href='hello.html'>go to the hello page</a>");
});

app.listen(port,function() {
    console.log("Server listening on port "+port);
});