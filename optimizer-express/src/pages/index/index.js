var template = require('raptor-templates')
    .load(require.resolve('./template.rhtml'));

module.exports = function(req, res) {
    template.render({
            name: 'Frank'
        },
        res);
};
