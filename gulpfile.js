var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./css/styles.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./css/styles.sass',  gulp.series('sass'));
});