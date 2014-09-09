var dustTemplate = require('view-engine')
    .load(require.resolve('./template.dust'));

exports.render = function renderDust(callback) {
    dustTemplate.render(
        {
            name: 'Frank'
        },
        callback);
};
