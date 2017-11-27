'use strict';

var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
    httpsEnabled: false,
    port: process.env.PORT || 80
} );

server.start();
server.express.use('/test', function(req, res) { res.send("OK"); });