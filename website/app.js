var express = require('express');
var app = express();

app.get('/all', function (req, res) {
	res.send("'hello world'");
})