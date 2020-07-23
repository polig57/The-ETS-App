var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password :'HAHANik!',
  database : 'theETSapp'
});

connection.connect();

// Listen to POST requests to /users.
app.post('/users', function(req, res) {
  // Get sent data.
  var user = req.body;
  // Do a MySQL query.
  var query = connection.query('INSERT INTO theETSapp SET ?', user, function(err, result) {

  });
  res.end('Success');
});

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));


app.listen(8080, function () {
  console.log('listening on port 8080' );
});

module.exports = app;
