Sample App: Widgets (binding behavior)
======================================

This sample app utilizes the following RaptorJS modules to demonstrate how to bind behavior to rendered UI components using the [marko-widgets](https://github.com/raptorjs/optimizer) module:

* [marko-widgets](https://github.com/raptorjs/marko-widgets)
* [marko](https://github.com/raptorjs/marko)
* [optimizer](https://github.com/raptorjs/optimizer)

# Installation

```
git clone https://github.com/raptorjs/raptor-samples.git
cd raptor-samples/widgets-bind-behavior
npm install
node server
```

Navigate to [http://localhost:8080/](http://localhost:8080/) to see your application in action!

# Additional Details

## Project Structure

```bash
./
├── server.js # Starts the server
└── src/ # Source code for the application
    └── pages/ # Top-level page modules
        └── index/ # The main index page
            ├── index.js # Page middleware
            ├── optimizer.json # Page dependencies
            ├── template.marko # Page template
            └── widget.js # Client-side behavior
```