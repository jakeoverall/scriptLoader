var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('Request:', req, 'Response:',  res);
  res.send(req);
});

app.post('/', function (req, res) {
  console.log('Request:', req, 'Response:',  res);
  res.send(req);
});


app.listen(8888, function (argument) {
  console.log('Listening')
});