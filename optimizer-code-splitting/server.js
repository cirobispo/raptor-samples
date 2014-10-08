var express = require('express');
var compression = require('compression');
var serveStatic = require('serve-static');
var marko = require('marko');

// Configure the RaptorJS Optimizer
require('optimizer').configure({
    'bundles': [
        {
            'name': 'common',
            'dependencies': [
                {
                    'intersection': [
                        './src/pages/home/optimizer.json',
                        './src/pages/profile/optimizer.json'
                    ]
                }
            ]
        }
    ]
});

var app = express();

var port = 8080;

app.use(compression()); // Enable gzip compression for all HTTP responses
app.use('/static', serveStatic(__dirname + '/static'));

app.get('/profile', require('./src/pages/profile'));
app.get('/',        require('./src/pages/home'));

app.listen(port, function() {
    console.log('Listening on port %d', port);
});
