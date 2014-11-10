__ = require('underscore');

var express = require('express');
 
var appengine = require('appengine');

var app = express();

app.use(appengine.middleware.base);

app.listen(8080, '0.0.0.0');
app.use("/", express.static(__dirname + '/public'));


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
