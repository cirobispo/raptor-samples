var $ = require('jquery');
var stockTicker = require('../../components/stock-ticker');

function Widget() {
    var el = this.el;
    var tickersEl = document.getElementById('tickers');

    function addSymbol(symbol) {
        stockTicker.render({
                symbol: symbol
            },
            function(err, result) {
                result.appendTo(tickersEl);
            });
    }

    $('form', el).submit(function(event) {
        var symbol = $('input', el).val();
        addSymbol(symbol);
        event.preventDefault();
    });

}

module.exports = Widget;