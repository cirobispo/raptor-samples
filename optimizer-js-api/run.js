var optimizer = require('optimizer');
var fs = require('fs');
var mustache = require('mustache');

optimizer.configure({
    "plugins": [
        "optimizer-less"
    ],
    "fileWriter": {
        "outputDir": "static",
        "fingerprintsEnabled": true
    },
    "minify": false,
    "resolveCssUrls": true,
    "bundlingEnabled": true,
    "bundles": [
        {
            "name": "jquery",
            "dependencies": [
                "require: jquery"
            ]
        },
        {
            "name": "math",
            "dependencies": [
                "require: ./add"
            ]
        }
    ]
});


optimizer.optimizePage({
        name: 'my-page',
        dependencies: [
            "style.less",
            "require-run: ./main"
        ]
    }, function(err, optimizedPage) {
        var mustacheSource = fs.readFileSync('my-page.mustache', 'utf8');

        var html = mustache.render(mustacheSource, {
            optimizerHead: optimizedPage.getHeadHtml(),
            optimizerBody: optimizedPage.getBodyHtml()
        });

        fs.writeFileSync('my-page.html', html, 'utf8');

        console.log('HTML page successfully written to "my-page.html"!');
    });
