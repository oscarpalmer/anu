
// Include all required modules
const del = require('del');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const minify = require('gulp-clean-css');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const pump = require('pump');
const yargs = require('yargs').argv;

// Configuration for Gulp
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
    // Allow tasks to be triggered on startup,
    // not just after their first change
    ignoreInitial: false
  }
};

// Empty the temporary folder
const clean = () => del(['.tmp/**']);

// Gulp task for working with CSS and Sass
const css = () => {
  return pump([
    gulp.src(config.css.source),
    sass().on('error', sass.logError),
    // Minify if called during build
    gulpif(yargs.production === true, minify()),
    gulp.dest(config.css.destination)
  ]);
};

// Gulp task for working with JS
const js = () => {
  return pump([
    gulp.src(config.js.source),
    // Minify if called during build
    gulpif(yargs.production === true, uglify()),
    gulp.dest(config.js.destination)
  ]);
};

// Gulp task for watching files during development
const watch = (cb) => {
  gulp.watch(config.css.source, config.watch, css);
  gulp.watch(config.js.source, config.watch, js);

  // Gulp-callback for async goodness
  cb();
};

// Export the tasks for access in the CLI
exports.build = gulp.series(clean, gulp.parallel(css, js));
exports.watch = gulp.series(clean, watch);
