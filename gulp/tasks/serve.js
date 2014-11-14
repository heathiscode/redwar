'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var webserver = $.webserver;
var browserSync = require('browser-sync');
var openBrowser = require('open');

var constants = require('../common/constants')();

var serverConfig = {
    host: constants.serve.host,
    root: constants.serve.root,
    port: constants.serve.port,
    livereload: constants.serve.livereload
};

gulp.task('serve', 'Launches a livereload server.', ['browserify', 'style', 'style:watch'], function() {
    gulp.src(serverConfig.root)
        .pipe(webserver({
            host: serverConfig.host,
            port: serverConfig.port,
            livereload: {
                enable: false,
                port: serverConfig.livereload
            }
        }));
    //console.log('Started connect web server on http://localhost:' + serverConfig.port + '.');
    openBrowser('http://' + serverConfig.host + ':' + serverConfig.port);
});

gulp.task('browsersync', 'Launches a browserSync server.', ['browserify', 'style', 'style:watch'], function() {
    var config = {
        files: [serverConfig.root + '/index.html', serverConfig.root + '/scripts/bundle.js', serverConfig.root + '/styles/main.css'],
        tunnel: true, // or 'workspace',
        server: {
            baseDir: serverConfig.root,
            middleware: [
                function(req, res, next) {
                    //console.log("Hi from middleware");
                    next();
                }
            ]
        },
        host: serverConfig.host,
        port: serverConfig.port,
        logLevel: 'info', // info, debug , silent
        open: false,
        browser: ['google chrome'], // ['google chrome', 'firefox'],
        notify: true,
        logConnections: false
    };

    browserSync(config);

});