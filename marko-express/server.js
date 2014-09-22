var express = require('express');
var indexTemplate = require('marko').load(require.resolve('./index.marko'));
var app = express();
var port = 8080;

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res) {
    indexTemplate.stream({
            name: 'Frank',
            count: 30,
            colors: ['red', 'green', 'blue']
        })
        .pipe(res);
});

app.listen(port, function() {
    console.log('Server started! Try it out:\nhttp://localhost:' + port + '/');

    if (process.send) {
        process.send('online');
    }
});
