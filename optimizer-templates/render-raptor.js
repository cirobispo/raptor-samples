var raptorTemplate = require('raptor-templates')
    .load(require.resolve('./template.rhtml'));

exports.render = function renderRaptor(callback) {
    raptorTemplate.render(
        {
            name: 'Frank'
        },
        callback);
};
