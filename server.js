'use strict';

var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
    httpsEnabled: false,
    port: process.env.PORT || 80
} );

server.start();

server.express.use('/test', function(req, res) { res.send(JSON.stringify(global.state)); });

// var express = require('express')();
var http = require('http').Server(server.express);

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});