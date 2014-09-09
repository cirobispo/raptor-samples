var template = require('raptor-templates')
    .load(require.resolve('./display-results.rhtml'));

module.exports = function (err, results) {

    template.render({
            error: err,
            results: results
        },
        function(err, html) {
            document.getElementById('resultsTarget').innerHTML = html;
        });
};
