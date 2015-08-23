# Browserify project sample

This project sample shows how to use [browserify](http://browserify.org/)/[gulp](http://gulpjs.com/) to combine all the javascript modules in order to use them in `index.html`

    npm install
    bowser install
    gulp
    npm start

##About this last commit 
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