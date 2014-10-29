var raptorRenderer = require('raptor-renderer');
var renderer = require('./renderer');

exports.render = function(input, callback) {
	raptorRenderer.render(renderer, input, callback);
};