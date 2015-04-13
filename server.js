var express     = require('express'),
    app         = express(),
    server      = require('http').Server(app),
    serveStatic = require('serve-static');

var path = 'dist';
var port = '9090';

exports.start = function () {
    app.use(serveStatic(__dirname + '/' + path));
    server.listen(port);    
    console.log('server running: http://localhost:' + port);
}

// app.use(serveStatic(__dirname + '/' + path));
// server.listen(port);
// console.log('localhost:' + port);