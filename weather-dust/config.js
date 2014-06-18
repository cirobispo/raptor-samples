var confit = require('confit');
var nodePath = require('path');

function parseArgs() {
    return require('raptor-args')
        .createParser({
            '--help': {
                type: 'string',
                description: 'Show this help message'
            },
            '--port -p': {
                type: 'number',
                description: 'Port number to listen on'
            },
            '--mock-services': {
                type: 'boolean',
                description: 'Enable mock services that return fake data'
            }
        })
        .usage('Usage: $0 server [options]')
        .example(
            'Start the server on port 8080',
            '$0 server --port 8080')
        .validate(function(result) {
            if (result.help) {
                this.printUsage();
                process.exit(0);
            }
        })
        .onError(function(err) {
            this.printUsage();
            console.error(err);
            process.exit(1);
        })
        .parse();  
}

function enableMockServices() {
    var fs = require('fs');
    var servicesMockDir = nodePath.join(__dirname, 'src/services-mock');
    var servicesDir = nodePath.join(__dirname, 'src/services');
    fs.readdirSync(servicesMockDir).forEach(function(filename) {
        if (/-mock.js$/.test(filename)) {
            console.log('Enabling mock service for "' + filename + '"...');
            // This is a mock service module and we want to overwrite
            // methods in the non-mock version of the module
            var mockModule = require(nodePath.join(servicesMockDir, filename));
            var targetModule = require(nodePath.join(servicesDir, filename.slice(0, 0-'-mock.js'.length) + '.js'));

            for (var k in mockModule) {
                if (mockModule.hasOwnProperty(k)) {
                    targetModule[k] = mockModule[k];
                }
            }
        }
    });
}

exports.load = function(callback) {
    var args = parseArgs();

    if (args.mockServices === true) {
        enableMockServices();
    }

    var configDir = nodePath.join(__dirname, 'config');
    confit(configDir).create(function(err, config) {
        if (err) {
            return callback(err);
        }

        config.use(args);
        callback(null, config);
    });
};