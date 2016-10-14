import gulp from 'gulp';
import eslint from 'gulp-eslint';

module.exports = () => {
  return gulp
    .src([
        'src/**/*.js',
        'src/*.jsx',
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
};
