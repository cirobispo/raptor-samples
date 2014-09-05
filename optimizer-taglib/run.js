var template = require('raptor-templates').load('my-page.rhtml');

require('raptor-optimizer').configure('raptor-optimizer-config.json');


var out = require('fs').createWriteStream('my-page.html', 'utf8');
out.on('close', function() {
    console.log('HTML page successfully written to "my-page.html"!');
});

template.render({}, out);
