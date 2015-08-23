# Browserify project sample

This project sample shows how to use [browserify](http://browserify.org/)/[gulp](http://gulpjs.com/) to combine all the javascript modules in order to use them in `index.html`

    npm install
    bowser install
    gulp
    npm start

The initial commit use the code in [this example](http://www.sitepoint.com/getting-started-browserify/)
* `app/main.js` uses the `underscore` node module
* run `gulp` to execute the `browserify` command which combine these two to `build/main.js`
* then `index.html`  uses `build/main.js`
