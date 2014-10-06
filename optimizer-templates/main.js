var series = require('async').series;
var displayResults = require('./display-results');
var viewEngine = require('view-engine');

// Configure view engines for Dust and Handlebars:
viewEngine.register('dust', require('view-engine-dust'), {
    dust: require('dustjs-linkedin')
});

viewEngine.register('hbs', require('view-engine-handlebars'), {
    handlebars: require('handlebars/runtime')
});

// Load templates:
var raptorTemplate = require('marko')
    .load(require.resolve('./template.marko'));

var handlebarsTemplate = require('view-engine')
    .load(require.resolve('./template.hbs'));

var dustTemplate = require('view-engine')
    .load(require.resolve('./template.dust'));

var viewModel = {
    name: 'Frank'
};

// Render templates:
series([
        function renderMarko(callback) {
            raptorTemplate.render(viewModel, callback);
        },
        function renderHandlebars(callback) {
            handlebarsTemplate.render(viewModel, callback);
        },
        function renderDust(callback) {
            dustTemplate.render(viewModel, callback);
        }
    ],
    displayResults);
