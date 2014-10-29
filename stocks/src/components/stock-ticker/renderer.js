var template = require('marko').load(require.resolve('./template.marko'));

var stocksService = require('../../services/stocks-service');

module.exports = function render(input, out) {
	out = out.beginAsync();
	stocksService.getQuote(input.symbol, function(err, quote) {
			if (err) {
				return out
					.write('Unable to get quote for "' + input.symbol + '"')
					.end();
			}

            var viewModel = {
                symbol: input.symbol.toUpperCase(),
                price: quote.lastPrice,
                isGain: quote.delta >= 0,
                delta: quote.delta > 0 ? '+' + quote.delta : quote.delta
            };

			template.render(viewModel, out).end();
		});
};