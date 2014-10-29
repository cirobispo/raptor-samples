require('optimizer').configure({
    plugins: [
        'optimizer-marko'
    ],
    bundlingEnabled: false,
    fingerprintsEnabled: false
});

var express = require('express');

var app = express();

app.use('/static', require('serve-static')(__dirname + '/static'));

app.get('/', require('./src/pages/home'));

app.listen(8080, function() {
    if (process.send) {
        process.send('online');
    }

    console.log('Server listening on port 8080');
    console.log('http://localhost:8080/');
});