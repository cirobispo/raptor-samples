var dust = require('dustjs-linkedin');

var raptorDust = require('raptor-dust');

exports.registerHelpers = function() {
    require('marko-async/dust').registerHelpers(dust);
    require('marko-layout/dust').registerHelpers(dust);
    require('marko-widgets/dust').registerHelpers(dust);
    require('raptor-sample-ui-components/dust').registerHelpers(dust);
    raptorDust.registerHelpers({
        'app-weather': require('./components/app-weather/renderer'),
        'app-choose-location': require('./components/app-choose-location/renderer'),
        'app-current-conditions': require('./components/app-current-conditions/renderer'),
        'app-location-weather': require('./components/app-location-weather/renderer')
    }, dust);

    // console.log('dust helpers: ', Object.keys(dust.helpers));
};