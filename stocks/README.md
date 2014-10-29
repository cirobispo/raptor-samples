Sample App: Stocks
===================

This sample app utilizes the following RaptorJS modules:

* [optimizer](https://github.com/raptorjs/optimizer): Used to generate optimized JavaScript and CSS bundles and generates the HTML markup to include them on the page.
* [marko](https://github.com/raptorjs/marko): HTML-based templating engine used to render pages and UI components on both the server.
* [marko-widgets](https://github.com/raptorjs/marko-widgets): Provides automatic binding of client-side behavior to UI components rendered on either the server or the client.
* [raptor-renderer](https://github.com/raptorjs/raptor-renderer): A module for invoking an HTML renderer function and injecting the resulting HTML into the DOM with automatic binding of client-side behavior.

# Installation

```
git clone https://github.com/raptorjs/raptor-samples.git
cd raptor-samples/stocks
npm install
node server
```

Navigate to [http://localhost:8080/](http://localhost:8080/) to see your application in action!

If you want to be able to write code and have the browser page automatically refresh then the following commands are recommended:

```
npm install browser-refresh -g
browser-refresh
```

# Project Structure

```bash
./
├── package.json # npm metadata
├── server.js # Starts the server
└── src/ # Source code for the application
    ├── components/ # UI components/custom tags
    │   └── stock-ticker/
    │       ├── optimizer.json # Client-side dependencies
    │       ├── renderer.js # HTML renderer
    │       ├── style.css # UI Component styling
    │       └── template.marko # HTML template
    ├── pages/ # Top-level page modules
    │   └── home/ # The main index page
    │       ├── index.js # Page middleware
    │       ├── optimizer.json # Page dependencies
    │       ├── template.marko # Page template
    │       └── widget.js # Client-side behavior
    ├── marko-taglib.json # marko taglib definition
    └── services/
        └── stocks-service.js # Stock quotes service
```