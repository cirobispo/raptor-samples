exports.getQuote = function(symbol, callback) {
    var quote = {
        symbol: symbol,
        lastPrice: (Math.random() * 200).toFixed(2),
        delta: (Math.random() * 100 - 50).toFixed(2)
    };

    callback(null, quote);
};