'use strict'

const gulp = require('gulp');

// Common plugins
const del = require('del');
const run = require('gulp-run-command').default;

// IMG plugins
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');


// Application directory name
const appDir = 'app'
// Source and build paths
const path = {
  src: {
    img:    `${appDir}/frontend/img/**/*.*`,
    fonts:  `${appDir}/frontend/fonts/**/*.*`
  },
  build: {
    img:    `${appDir}/static/img`,
    fonts:  `${appDir}/static/fonts`
  },
  clean:    `${appDir}/static`
};


// Images
gulp.task('img:build', () => {
  return gulp.src(path.src.img)
             .pipe(cache(imagemin({
               progressive: true,
               svgoPluggins: [{removeViewBox: false}],
               use: [pngquant()],
               interlaced: true
             })))
             .pipe(gulp.dest(path.build.img))
});

// Fonts
gulp.task('fonts:build', () => {
  return gulp.src(path.src.fonts)
             .pipe(gulp.dest(path.build.fonts))
});

// Clean build directory
gulp.task('clean', () => del(path.clean));

// Watch task
gulp.task('watch', () => {
  gulp.watch(path.src.img, gulp.series('img:build'));
  gulp.watch(path.src.fonts, gulp.series('fonts:build'));
});

// Webpack HWR server
gulp.task('webpack:development-build', run('node server.js'));

// Webpack production build
gulp.task('webpack:production-build', run('./node_modules/.bin/webpack --config webpack.prod.config.js'));

// Task for running application
gulp.task('python', run('python3 manage.py runserver'))

// Serve static files and python server
gulp.task('serve', gulp.parallel('python', 'watch', 'webpack:development-build'));

// Default task
gulp.task('default', gulp.series(
  'clean',
  gulp.parallel(
    'webpack:production-build',
    'img:build',
    'fonts:build',
  )
));
