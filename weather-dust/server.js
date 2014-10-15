var express = require('express');
var optimizer = require('optimizer');
var viewEngine = require('view-engine');
var config = require('./config');

console.log('pid: ', process.pid);

// Asynchronously load environment-specific configuration data before starting the app
config.load(function(err, config) {
    var app = express();

    optimizer.configure(config.get('optimizer'));
    
    viewEngine.register('dust', require('view-engine-dust'), {
        dust: require('dustjs-linkedin')
    });

    require('./src/dust-helpers').registerHelpers();
    require('./src/dust-helpers-server').registerHelpers();

    var port = config.get('port');

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