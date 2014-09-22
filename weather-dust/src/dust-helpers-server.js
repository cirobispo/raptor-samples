var dust = require('view-engine-dust').dust;

exports.registerHelpers = function() {
    require('optimizer/dust').registerHelpers(dust);
    require('browser-refresh-taglib/dust').registerHelpers(dust);
};