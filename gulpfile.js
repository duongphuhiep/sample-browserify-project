var gulp = require('gulp');
var browserify = require('gulp-browserify');

// Basic usage 
gulp.task('bundle', function() {
    // Single entry point to browserify 
    gulp.src('app/main.js')
        .pipe(browserify({
          //insertGlobals : true,
          debug : true
        }))
        .pipe(gulp.dest('build'))
});


gulp.task('default', ['bundle'], function(){});