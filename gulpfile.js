var gulp = require('gulp');


var gulp = require('gulp'),
    qunit = require('gulp-qunit');

gulp.task('test', function() {
    return gulp.src('./tests/tests.html')
        .pipe(qunit());
});
