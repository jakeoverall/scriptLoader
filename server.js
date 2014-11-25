var express = require('express');
var app = express();
var scripts = require('./scripts');

app.use(express.static(__dirname + '/Public'));

app.get('/loader', function (req, res) {
  res.send(scripts);
});

app.listen(8888, function (argument) {
  console.log('Listening')
});