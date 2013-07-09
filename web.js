var express = require('express');

var app = express.createServer(express.logger());

var indexBuffer = fs.readFile('index.html');

var index = buf.toString(indexBuffer);

app.get('/', function(request, response) {
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
