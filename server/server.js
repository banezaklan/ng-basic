var express = require("express"),
    app = express(),
    bodyParser = require('body-parser')
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    port = parseInt(process.env.PORT, 10) || 8080;
var path = require('path');

var rootPath = '/home/bane/Development/angular/ng-basic';

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//initialize static server that will spit out contents of public folder
app.use('/', express.static(rootPath));

//send our main angular html file if any link without dot is requested, e.g. 'http://someurl/about'
//this is our actual server side redirect, we don't send index.html when there's dot in link assuming such a request
//is for static data like .js, .css or .html
app.get('/[^\.]+$', function(req, res){
    res.set('Content-Type', 'text/html');
    //res.sendFile(rootPath/index.html');
    res.sendFile(path.resolve(rootPath + '/index.html'));
});

app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

console.log("Simple static server listening at http://localhost:" + port);
app.listen(port);
