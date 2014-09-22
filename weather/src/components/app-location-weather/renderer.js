var template = require('marko').load(require.resolve('./template.marko'));

module.exports = function render(data, context) {
    var weatherData = data.weatherData;

    var location = weatherData.location;

    template.render({
        weatherData: weatherData,
        location: location || weatherData.requestedLocation,
        invalidLocation: location == null
    }, context);
};