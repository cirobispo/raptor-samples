var dust = require('dustjs-linkedin');

exports.registerHelpers = function() {
    require('optimizer/dust').registerHelpers(dust);
    require('browser-refresh-taglib/dust').registerHelpers(dust);
};