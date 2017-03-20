'use strict';

const gulp = require('gulp');
const jade = require('gulp-jade');
const watch = require('gulp-watch');
const sass = require('gulp-sass');

gulp.task('renderjade', () => {
  gulp.src('./lib/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', () => {
  gulp.src('./lib/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', () => {
  watch([ './lib/**/*.jade', './lib/**/*.sass'], () => {
    gulp.run('renderjade');
    gulp.run('sass');
  });
});

gulp.task('default', [ 'renderjade' ]);
