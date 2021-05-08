var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require("mongoose"),
    // created model
    Task = require("./api/models/todoListModel"),
    bodyParser = require("body-parser");

// mongooose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require("./api/routes/todoListRoutes");
routes(app);

// listens and displays port 
app.listen(port);
console.log("todo list RESTful API server started on: " + port );