module.exports = function (grunt) {
    'use strict';

    var almond,
        path;

    path = require('path');
    almond = path.relative('.', require.resolve('almond'));

    grunt.loadNpmTasks('grunt-bower-install-simple');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'bower-install-simple': {
            install: {
                options: {
                    cwd: 'src',
                    directory: 'vendor'
                }
            }
        },
        requirejs: {
            default: {
                options: {
                    baseUrl: 'src',
                    include: ['main'],
                    mainConfigFile: 'src/config.js',
                    name: '../'.concat(almond.slice(0, -3)) /* remove .js extension */,
                    optimize: 'none',
                    out: 'build/main-out.js'
                }
            }
        }
    });

    grunt.registerTask('default', ['bower-install-simple', 'requirejs']);
};
