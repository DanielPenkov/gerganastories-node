/* eslint-disable no-console */

const gulp = require('gulp');
const nodemon = require('nodemon');


gulp.task('server:start', () => {
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development',
        },
    });
});
