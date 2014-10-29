var template = require('marko').load(require.resolve('./template.marko'));

module.exports = function(req, res) {
    var symbols = ['EBAY', 'GOOGL'];

    var viewModel = {
        symbols: symbols
    };

    template.render(viewModel, res);
};