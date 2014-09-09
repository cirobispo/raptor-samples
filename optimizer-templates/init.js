var dust = require('dustjs-linkedin');
var handlebars = require('handlebars/runtime');

var viewEngine = require('view-engine');
viewEngine.register('dust', require('view-engine-dust'), { dust: dust });
viewEngine.register('hbs', require('view-engine-handlebars'), { handlebars: handlebars });
