require('./init');

var async = require('async');
var displayResults = require('./display-results');

async.series([
        require('./render-dust').render,
        require('./render-handlebars').render,
        require('./render-raptor').render
    ],
    displayResults);
