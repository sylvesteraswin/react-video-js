import gulp from 'gulp';
import babel from 'gulp-babel';
import browserify from 'browserify';
import wrap from 'gulp-wrap-umd';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import livereload from 'gulp-livereload';

module.exports = () => {
  return browserify({
      entries: './example/src/app.jsx',
      extensions: ['.jsx'],
      debug: true,
    })
    .transform('babelify', {
        presets: ['es2015', 'react', 'stage-1'],
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./example/'))
    .pipe(livereload());
};
