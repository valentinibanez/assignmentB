var gulp = require('gulp');
var webserver = require('gulp-webserver');
var babel = require("gulp-babel");
var concat = require('gulp-concat');
var sourcemaps = require("gulp-sourcemaps");
var htmlmin = require('gulp-htmlmin');

gulp.watch('src/**/*', ['build']);

gulp.task('webserver', ['build'], function() {
  gulp.src('./dist')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('build', ['html', 'css', 'data'], function() {
    return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('script.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
    return gulp.src('src/*.css')
    .pipe(gulp.dest('./dist'));
});

gulp.task('data', function() {
    return gulp.src('src/**/*')
    .pipe(gulp.dest('./dist'));
});