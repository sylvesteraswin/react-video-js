import gulp from 'gulp';
import taskDir from 'task-dir';
import runSequence from 'run-sequence';
import path from 'path';

taskDir(gulp, path.join(__dirname, 'source'));

module.exports = (callback) => {
    runSequence('build:source:clean', 'build:source:style', 'build:source:lint', 'build:source:babel', 'build:source:umd', callback);
};
