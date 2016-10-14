import gulp from 'gulp';
import taskDir from 'task-dir';
import runSequence from 'run-sequence';
import path from 'path';

taskDir(gulp, path.join(__dirname, 'example'));

module.exports = (callback) => {
    runSequence('build:example:clean', 'build:example:babel', 'build:example:stylecopy', callback);
};
