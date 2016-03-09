var http = require("http");
var express = require("express");
var mongodb = require('mongodb');
var bodyParser = require('body-parser');

var app = express();

app.use(express.logger());
app.set("view options", { layout: false });
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('/index.html');
});

app.listen(8989);
console.log("Server listening on 8989");
