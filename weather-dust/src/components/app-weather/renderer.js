var template = require('view-engine').load(require.resolve('./template.dust'));

module.exports = function render(data, context) {
    template.render({
        weatherData: data.weatherData
    }, context);
};