
// Include all required modules
const del = require('del');
const gulp = require('gulp');
const gulp_gzip = require('gulp-gzip');
const gulp_if = require('gulp-if');
const gulp_purgecss = require('gulp-purgecss');
const gulp_sass = require('gulp-sass');
const gulp_report = require('gulp-sizereport');
const gulp_uglify = require('gulp-uglify');
const pump = require('pump');
const yargs = require('yargs').argv;

// Folders to search in and build to
const folders = {
   build: './build',
     css: '/assets/stylesheets',
      js: '/assets/javascripts',
  source: './source',
     tmp: './.tmp/gulp'
}

// Configuration for Gulp
const config = {
  css: {
    destination: folders.tmp + folders.css,
         source: folders.source + folders.css + '/**/*.{css,sass,scss}'
  },
  js: {
    destination: folders.tmp + folders.js,
         source: folders.source + folders.js + '/**/*.js'
  },
  watch: {
    // Allow tasks to be triggered on startup,
    // not just after their first change
    ignoreInitial: false
  }
};

// Gulp task
// Empties and removes the build folder
const clean_build = () => del([folders.build + '/**']);

// Gulp task
// Empties the temporary folders
const clean_tmp = () => del(['./.tmp/**/*.{css,js}']);

// Gulp task
// Processes and minifies CSS and Sass-files
const css = () => {
  return pump([
    gulp.src(config.css.source),
    gulp_sass({
      // Compress (minify) if called during build
      outputStyle: yargs.production === true ? 'compressed' : 'nested'
    }).on('error', gulp_sass.logError),
    gulp.dest(config.css.destination)
  ]);
};

// Gulp task
// Compresses text files
const gzip = () => {
  console.log('== Compressing text files with gzip');

  return pump([
    gulp.src(folders.build + '/**/*.{css,html,js}'),
    gulp_gzip({
      // Skip compression if it would end up larger than its source
      skipGrowingFiles : true
    }),
    gulp.dest(folders.build)
  ]);
};

// Gulp task
// Minifies JavaScript-files
const js = () => {
  return pump([
    gulp.src(config.js.source),
    // Minify if called during build
    gulp_if(yargs.production === true, gulp_uglify()),
    gulp.dest(config.js.destination)
  ]);
};

// Gulp task
// Purges CSS files; removes unused selectors and rules
const purge = () => {
  console.log('== Purging CSS files');

  return pump([
    gulp.src(folders.build + folders.css + '/**/*.css'),
    gulp_purgecss({
      content: [folders.build + '/**/*.html']
    }),
    gulp.dest(folders.build + folders.css)
  ]);
};

// Gulp task
// Displays normal and compressed file sizes
const report = () => {
  console.log('== Creating size report for files');

  return pump([
    gulp.src(folders.build + '/**/*.{css,html,js}'),
    gulp_report({
      // Display gzip-column
      gzip: true
    })
  ]);
}

// Gulp task
// Watches files during development
const watch = (cb) => {
  gulp.watch(config.css.source, config.watch, css);
  gulp.watch(config.js.source, config.watch, js);

  // Gulp-callback for async goodness
  cb();
};

// Export the tasks for access in the CLI
exports.after = gulp.series(purge, gzip, report);
exports.build = gulp.series(gulp.parallel(clean_tmp, clean_build), gulp.parallel(css, js));
exports.watch = gulp.series(clean_tmp, watch);
