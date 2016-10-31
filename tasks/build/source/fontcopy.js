import gulp from 'gulp';
import rename from 'gulp-rename';

module.exports = () => {
    return gulp
        .src('node_modules/videojs-font/fonts/*.*')
        .pipe(gulp.dest('build/font'));
};
