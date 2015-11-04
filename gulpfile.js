'use strict';
var gulp        = require('gulp'),
    ghPages     = require('gulp-gh-pages'),
    imageMin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant');

gulp.task('test', function(){
  console.log('Todo funcionando en orden 😁');
});

// Optimizar imagenes https://www.npmjs.com/package/gulp-imagemin/ y reload
gulp.task('imagemin', function () {
  return gulp.src('./src/img/**/*')
  .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
  }))
  .pipe(gulp.dest('./dist/img/'));
});

// Vigilar situaciones
gulp.task('watch', ['imagemin'], function () {
  gulp.watch('src/img/**', ['imagemin']);
});

// Subir a Github
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
  .pipe(ghPages());
});

gulp.task('default', ['watch']);
