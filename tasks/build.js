import gulp from 'gulp';
import taskDir from 'task-dir';
import runSequence from 'run-sequence';
import path from 'path';

taskDir(gulp, path.join(__dirname, 'build'));

module.exports = (callback) => {
    runSequence('build:source', 'build:example', callback);
};
