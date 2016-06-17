var express = require('express')

//Create our App

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){})

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express Server is up on port ' + PORT);
});
