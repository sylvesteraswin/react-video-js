import gulp from 'gulp';
import sass from 'gulp-sass';
import minifyCss from 'gulp-minify-css';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';

import pkg from '../../../package.json';

module.exports = () => {
  return gulp
    .src([
      'src/*.scss'
    ])
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
      ]
    }))
    .pipe(minifyCss({
      rebase: false,
      compatibility: '+properties.urlQuotes'
    }))
    .pipe(rename(`${pkg.name}.css`))
    .pipe(gulp.dest('build'));
};
