import gulp from 'gulp';
import connect from 'gulp-connect';

import pkg from '../../package.json';

module.exports = () => {
    return connect.server({
            ...pkg.devServer
        });
};
