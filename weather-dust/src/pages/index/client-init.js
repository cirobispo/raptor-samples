var viewEngine = require('view-engine');
var dust = require('dustjs-linkedin');

viewEngine.register('dust', require('view-engine-dust'), { dust: dust });
viewEngine.register('marko', require('view-engine-marko'));

require('../../dust-helpers').registerHelpers(dust);
require('marko-widgets').initAllWidgets();