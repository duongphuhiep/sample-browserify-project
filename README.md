# Browserify project sample with test

This sample shows a basic front-end [`browserify`](http://browserify.org/) project skeleton:

- [`index.html`](/index.html) is the entry point
- The [`/app`](/app) folder contains all applicatif javascripts modules in the `commonjs` format (`module.exports`, `require`)
- Applicatif modules can `require` each others or `require` node modules
- Applicatif modules can also `require` other external libraries via [browserify-shim](https://github.com/thlorenz/browserify-shim). In most case, external libraries are coming from CDN, so they are declared in [`index.html`](/index.html) and won't be bundled by `browserify`
- [Some unit test](/tests/unit) with [`jasmine`](http://jasmine.github.io/) on browser only (because it is a 100% front-end application and there is no javascript on backend)
- [An end to end test](/tests/e2e) with [`nightwatch`](http://nightwatchjs.org/)
- [`browserify`](http://browserify.org/)/[`gulp`](http://gulpjs.com/) will wire up together all local modules (applicatif modules + node modules), so no need of module loader (such as `systemjs` or `stealjs`)
- [TODO] `require` bower modules
- [TODO] mock ajax request

## Too much?
If you need a more basic example without test, just [`browserify`](http://browserify.org/): checkout the [initial commit](#initial-commit) or the [second commit](#the-second-commit)
- The [initial commit](#initial-commit) show 
  * how to organize your applicatif code into modules, 
  * make use a node module
  * and use browserify to bundle everything to the frontend (`index.html`)
- The [second commit](#the-second-commit) add jquery from CDN into the project but not include it into the applicatif bundle.

##Execution 

    npm install
    bower install
    gulp start      #build everything and launch the browser with index.html
    gulp test       #build everything and launch the browser with SpecRunner.html
    gulp watch      #use in developpement, rebuild for each file changes

See [`gulpfile.js`](/gulpfile.js) to know all avaiable tasks
    
##Unit test

* Unit tests are developping under the folder [`tests/unit`]('/tests/unit')
* The command `gulp bundle:test` (see [`gulpfile.js`](/gulpfile.js)) will  bundle each unit test with their local dependencies to the folder `build-tests`
* Test launcher is your browser: navigate to `http://localhost:8080/`[`SpecRunner.html`](/SpecRunner.html) to run unit tests. 
* Whenever you have a new unit test to run, you must to include it in the [`SpecRunner.html`](/SpecRunner.html)
```
    <script src="build-tests/NewUnitTest.js"></script>
```
* Check out the [`ChessboardSpec.js`](/tests/unit/ChessboardSpec.js).
  * it is the unit test of the [`Chessboard.js`](/app/Chessboard.js) module. 
  * the [`Chessboard.js`](/app/Chessboard.js) module requires other applicatif module ([`Piece.js`](/app/Piece.js)), requires a node module (`underscore`), and also requires the  `jquery` library which comes from a CDN.
  * And we are able to unit test this module, it will be a interesting example.

##End to end tests

* End to end test are developping under the folder [`tests/e2e`]('/tests/e2e')
* Unlike unit test, it won't need to be compiled (because it test directly `index.html`), and do not require any applicatif modules
* Test launcher is nightwatch. Just run:
```
    nightwatch      #run end to end test require 'npm install nightwatch -g'
```

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