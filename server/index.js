var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');


var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));


app.listen(8080, function () {
  console.log('listening on port 8080' );
});

module.exports = app;
// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });


