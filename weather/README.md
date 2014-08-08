Sample App: Weather (Raptor Templates)
======================================

This sample app utilizes the following RaptorJS modules:

* [raptor-optimizer](https://github.com/raptorjs3/raptor-optimizer): Used to generate optimized JavaScript and CSS bundles and generates the HTML markup to include them on the page.
* [raptor-templates](https://github.com/raptorjs3/raptor-templates): HTML-based templating engine used to render pages and UI components on both the server.
* [async-config](https://github.com/raptorjs3/raptor-args): Used to load environment-specific configuration required to configure the app.
* [raptor-args](https://github.com/raptorjs3/raptor-args): Used to parse command-line arguments.
* [raptor-widgets](https://github.com/raptorjs3/raptor-widgets): Provides automatic binding of client-side behavior to UI components rendered on either the server or the client.
* [raptor-renderer](https://github.com/raptorjs3/raptor-renderer): A module for invoking an HTML renderer function and injecting the resulting HTML into the DOM with automatic binding of client-side behavior.

# Installation

```
git clone https://github.com/raptorjs3/raptor-samples.git
cd raptor-samples/weather
npm install
node server
```

Navigate to [http://localhost:8080/](http://localhost:8080/) to see your application in action!

If you want to be able to write code and have the browser page automatically refresh then the following commands are recommended:

```
npm install browser-refresh -g
browser-refresh
```

# Additional Details

## Project Structure

```bash
./
├── config/ # Configuration files
│   ├── config.json # Configuration defaults
│   ├── raptor-optimizer.json # Default configuration for the raptor-optimizer
│   └── raptor-optimizer-production.json # Production configuration for the raptor-optimizer
├── config.js # Helper module for loading the configuration
├── mock-services.js # Helper module to use mock service modules
├── package.json # npm metadata
├── routes.js # Registers URL routes
├── server.js # Starts the server
└── src/ # Source code for the application
    ├── api/ # API endpoint implementations
    │   └── weather.js
    ├── components/ # Components/custom tags
    │   ├── app-choose-location/
    │   │   ├── optimizer.json # Client-side dependencies
    │   │   ├── renderer.js # HTML renderer
    │   │   ├── style.css # UI Component styling
    │   │   ├── template.rhtml # HTML template
    │   │   └── widget.js # Client-side behavior
    │   ├── app-current-conditions/
    │   │   └── ...
    │   ├── app-location-weather/
    │   │   └── ...
    │   └── app-weather/
    │       └── ...
    ├── global-style/ # Module to control the style of all pages
    │   └── ...
    ├── layouts/ # Layout templates
    │   └── default-layout.rhtml
    ├── pages/ # Top-level page modules
    │   └── index/ # The main index page
    │       ├── index.js # Page middleware
    │       ├── optimizer.json # Page dependencies
    │       ├── style.less # Page-specific style
    │       └── template.rhtml # Page template
    ├── raptor-taglib.json # raptor-templates taglib definition
    ├── services/
    │   ├── package.json # Browser override configured in package.json
    │   ├── weather-service-browser.js # Browser-side version of the weather-service module
    │   ├── weather-service-util.js # Utility methods
    │   └── weather-service.js # Server-side version of the weather-service module
    └── third-party/
        └── bootstrap/
            └── optimizer.json # Package up Bootstrap
```

## Resource Optimization

Unless the `NODE_ENV` environment variable is set to `production`, the application will start in development mode. In development mode, resource optimizations such as minification, concatenation and checksummed URLs are disabled to be more developer-friendly. Try starting the application using the following command to see what it looks like in the optimized production mode:

```
env NODE_ENV=production node server
```

Now navigate back to [http://localhost:8080/](http://localhost:8080/) and you should see less `<script>` and `<link>` tags (as a result of resource aggregation) and all source code should be minified.

