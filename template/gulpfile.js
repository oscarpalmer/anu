const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const minify = require('gulp-clean-css');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const pump = require('pump');
const yargs = require('yargs').argv;

const config = {
  css: {
    destination: '.tmp/gulp/assets/stylesheets',
    source: './source/assets/stylesheets/**/*.{css,sass,scss}'
  },
  js: {
    destination: '.tmp/gulp/assets/javascripts',
    source: './source/assets/javascripts/**/*.js'
  },
  watch: {
    ignoreInitial: false
  }
};

const clean = () => del(['.tmp/**']);

const css = () => {
  return pump([
    gulp.src(config.css.source),
    sass().on('error', sass.logError),
    gulpif(yargs.production === true, minify()),
    gulp.dest(config.css.destination)
  ]);
};

const js = () => {
  return pump([
    gulp.src(config.js.source),
    gulpif(yargs.production === true, uglify()),
    gulp.dest(config.js.destination)
  ]);
};

const watch = (cb) => {
  gulp.watch(config.css.source, config.watch, css);
  gulp.watch(config.js.source, config.watch, js);

  cb();
};

exports.build = gulp.series(clean, gulp.parallel(css, js), clean);
exports.watch = gulp.series(clean, watch);
