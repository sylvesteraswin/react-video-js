import gulp from 'gulp';
import babel from 'gulp-babel';

module.exports = () => {
  return gulp
    .src([
      'src/*.jsx',
      'src/**/*.js'
    ])
    .pipe(babel())
    .pipe(gulp.dest('lib'));
};
