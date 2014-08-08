var express = require('express');
var raptorOptimizer = require('raptor-optimizer');

require('./config').onConfigured(function(err, config) {
    if (err) {
        throw err;
    }

    var app = express();

    var port = config.port;

    app.use(express.compress());
    app.use('/static', express.static(__dirname + '/static'));

    require('./routes')(app);

    app.listen(port, function() {
        console.log('Listening on port %d', port);

        if (process.send) {
            process.send('online');
        }
    });
});