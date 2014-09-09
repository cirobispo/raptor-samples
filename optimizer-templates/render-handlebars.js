var handlebarsTemplate = require('view-engine')
    .load(require.resolve('./template.hbs'));

exports.render = function renderHandlebars(callback) {
    handlebarsTemplate.render(
        {
            name: 'Frank'
        },
        callback);
};
