var gulp        = require('gulp'),
  minifyCSS     = require('gulp-minify-css'),
  sass          = require('gulp-sass'),
  jshint        = require('gulp-jshint'),
  jshintStyle   = require('jshint-stylish'),
  replace       = require('gulp-replace'),
  notify        = require('gulp-notify'),
  path          = require('path');

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/css/'))
    .pipe(notify({ message: 'CSS complete' }));
});

gulp.task('jshint', function() {
  return gulp.src('./js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStyle))
    .pipe(jshint.reporter('fail'))
    .pipe(notify({ message: 'JSHint complete' }));
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['jshint']);
});

gulp.task('default', ['watch']);
