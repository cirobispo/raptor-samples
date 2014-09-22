var template = require('marko')
    .load(require.resolve('./display-results.marko'));

module.exports = function (err, results) {

    template.render({
            error: err,
            results: results
        },
        function(err, html) {
            document.getElementById('resultsTarget').innerHTML = html;
        });
};
