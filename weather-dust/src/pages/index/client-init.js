var viewEngine = require('view-engine');
var viewEngineDust = require('view-engine-dust');
var dust = viewEngineDust.dust;

viewEngine.register('dust', viewEngineDust);
viewEngine.register('marko', require('view-engine-raptor'));

require('../../dust-helpers').registerHelpers(dust);
require('marko-widgets').initAllWidgets();