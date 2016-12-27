'use strict';

const gulp = require('gulp');
const jade = require('gulp-jade');
const watch = require('gulp-watch');

gulp.task('renderjade', () => {
  gulp.src('./lib/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', () => {
  watch('./lib/**/*.jade', () => {
    gulp.run('renderjade');
  });
});

gulp.task('default', [ 'renderjade' ]);
