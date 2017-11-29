'use strict';

var AlexaAppServer = require( 'alexa-app-server' );

var server = new AlexaAppServer( {
    httpsEnabled: false,
    port: process.env.PORT || 80
} );

server.start();

server.express.use('/getState', function(req, res) {
    res.send(JSON.stringify(globalStates.state));
});

server.express.use('/getNewActions', function(req, res) {
    res.send(JSON.stringify(globalStates.actionQueue));
    globalStates.actionQueue = [];
});

// global.lastSentState = null;
//
// //     {
// //     'RED': 0.0,
// //     'BLUE': 0.0,
// //     'GREEN': 0.0
// // };
//
// server.express.use('/getStateDiff', function(req, res) {
//     if (!global.lastSentState) {
//         res.send(JSON.stringify(global.state));
//     } else {
//         var stateToSend = {};
//         if (global.lastSentState.RED !== global.state.RED) {
//             stateToSend['RED'] = global.state.RED;
//         }
//         if (global.lastSentState.GREEN !== global.state.GREEN) {
//             stateToSend['GREEN'] = global.state.GREEN;
//         }
//         if (global.lastSentState.BLUE !== global.state.BLUE) {
//             stateToSend['BLUE'] = global.state.BLUE;
//         }
//         res.send(JSON.stringify(stateToSend));
//     }
//
//     global.lastSentState = {
//         'RED': global.state.RED,
//         'GREEN': global.state.GREEN,
//         'BLUE': global.state.BLUE
//     }
// });
