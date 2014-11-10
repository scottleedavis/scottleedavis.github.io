__ = require('underscore');

var express = require('express');
 
var appengine = require('appengine');

var app = express();

app.use(appengine.middleware.base);

app.listen(8080, '0.0.0.0');
app.use("/", express.static(__dirname + '/public'));

app.get('/_ah/health', function(req, res) {
  res.set('Content-Type', 'text/plain');
  res.send(200, 'ok');
});

app.get('/_ah/start', function(req, res) {
  res.set('Content-Type', 'text/plain');
  res.send(200, 'ok');
});

app.get('/_ah/stop', function(req, res) {
  res.set('Content-Type', 'text/plain');
  res.send(200, 'ok');
  process.exit();
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
