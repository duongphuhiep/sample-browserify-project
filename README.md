# Browserify project sample with test

This sample shows a basic front-end [`browserify`](http://browserify.org/) project skeleton:

- `index.html` is the entry point
- `/app` contains all applicatif javascripts modules in the `commonjs` format (with `module.exports`, `require`)
- Applicatif module can `require` each other or `require` node modules
- [`browserify`](http://browserify.org/)/[gulp](http://gulpjs.com/) will wire up together all local modules (applicatif modules + node modules), so no need of module loader (such as `systemjs` or `stealjs`)
- A module can `require` other external libraries via [browserify-shim](https://github.com/thlorenz/browserify-shim). In most case, external libraries are coming from CDN, so they are declared in `index.html` and won't be bundled by 
`browserify`
- An end to end test with [`nightwatch`](http://nightwatchjs.org/)
- [TODO] A unit test with jasmine on browser only (no javascript on backend)

##Execution

    npm install
    bowser install
    gulp
    npm start       #run the live-server it will open the browser
    nightwatch      #run end to end test require 'npm install nightwatch -g'

If you need a more basic example: with just [`browserify`](http://browserify.org/), checkout the "initial commit" or the "second commit"
- The 'Initial commit' show how to organize your applicatif code into modules, make use a node module, and use browserify to bundle everything to the frontend (`index.html`)
- The second commit add jquery from CDN into the project but not include it into the applicatif bundle.

##The second commit

* `app/main.js` uses 
  * 1 internal module `app/names.js`
  * 1 node module `underscore`
  * 1 external module coming from a CDN `jquery` via [browserify-shim](https://github.com/thlorenz/browserify-shim)
  
* run `gulp` to execute the `browserify` command which generates
    `build/main.js` = `app/main.js` + `app/names.js` + `underscore`

* `index.html`
```
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="build/main.js"></script>
```
* package.json
```
    "browserify": {
        "transform": [ "browserify-shim" ]
      },
      "browserify-shim": {
        "jquery": "global:jQuery"
      },
```

##Initial commit
Check out for a really basic sample. The initial commit uses the code in [this example](http://www.sitepoint.com/getting-started-browserify/)
* `app/main.js` uses the `underscore` node module
* run `gulp` to execute the `browserify` command which combine these two to `build/main.js`
* then `index.html`  uses `build/main.js`

##Personal opinion
The nodejs eco-system is a must for developping front-end web application. But I'd rather avoid javascript programing whenever possible. So there is no backend nodejs javascript in all of my tutorials.