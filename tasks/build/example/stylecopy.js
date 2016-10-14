import gulp from 'gulp';
import rename from 'gulp-rename';

module.exports = () => {
    return gulp
        .src('build/*.css')
        .pipe(rename('style.css'))
        .pipe(gulp.dest('example'));
};
