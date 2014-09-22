var raptorTemplate = require('marko')
    .load(require.resolve('./template.marko'));

exports.render = function renderRaptor(callback) {
    raptorTemplate.render(
        {
            name: 'Frank'
        },
        callback);
};
