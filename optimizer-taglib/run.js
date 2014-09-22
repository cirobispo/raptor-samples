var template = require('marko').load('my-page.marko');

require('optimizer').configure('optimizer-config.json');


var out = require('fs').createWriteStream('my-page.html', 'utf8');
out.on('close', function() {
    console.log('HTML page successfully written to "my-page.html"!');
});

template.render({}, out);
