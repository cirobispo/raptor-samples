var raptorOptimizer = require('raptor-optimizer');
var fs = require('fs');
var mustache = require('mustache');

raptorOptimizer.configure({
    "plugins": [
        "raptor-optimizer-less"
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


raptorOptimizer.optimizePage({
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
