var gulp = require('gulp');
var browserify = require('gulp-browserify');
var plumber = require('gulp-plumber');
var liveServer = require("live-server");

// genearate build/main.js
gulp.task('bundle', function() {
    // Single entry point to browserify 
    gulp.src('app/main.js')
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(browserify({
          detectGlobal:true,
          debug : true
        }))
        .pipe(gulp.dest('build'))
});

// genearate build-tests/*.js
gulp.task('bundle:test', function() {
    // Single entry point to browserify 
    gulp.src('tests/unit/**/*.js')
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(browserify({
          detectGlobal:true,
          debug : true
        }))
        .pipe(gulp.dest('build-tests'))
});

// use in the developement mode
gulp.task('watch', ['bundle', 'bundle:test'], function(){
    gulp.watch('app/**/*', ['bundle', 'bundle:test']);
    gulp.watch('tests/unit/**/*.js', ['bundle:test']);
    liveServer.start({ignore:'app,tests,reports,bin'}); 
});


gulp.task('start', ['bundle'], function(){
    liveServer.start();
});

gulp.task('test', ['bundle:test'], function(){
    liveServer.start({open:'/SpecRunner.html'});
});

gulp.task('default', ['start','bundle:test'], function(){});