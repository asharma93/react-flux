var webpack = require('webpack');

module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*']
    });
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),
        config: {
            name: 'demo-webpack-react-app',
            app: 'src',
            dist: 'dist',
            bower: 'bower_components/**',
            pub: 'public',
            build: 'build',
            assets: 'assets'
        },
        clean: {
            dist: '<%= config.dist %>',
            pub: '<%= config.pub %>'
        },
        sass: {
            dist : {
                options: {
                    style: 'compressed',
                    sourcemap: 'none',
                    noCache: true
                },
                files: {
                    "<%= config.dist %>/css/<%= pkg.name %>.min.css" : '<%= config.app %>/scss/main.scss'
                }
            }
        },
        concat: {
            options: {
                stripBanners: true,
                style: 'compressed'
            },
            dist: {
                src: ['src/js/**'],
                dest: 'dist/js/main.concat.js'
            }
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015', 'react']
            },
            dist: {
                files: {
                    'dist/app.js': 'src/js/*.js'
                }
            }
        },
        webpack: {
            someName: {
                // webpack options
                entry: "./src/js/entry.js",
                output: {
                    path: "dist/",
                    filename: "webpack.js",
                },

                stats: {
                    // Configure the console output
                    colors: false,
                    modules: true,
                    reasons: true
                },

                progress: false, // Don't show progress
                // Defaults to true

                failOnError: false, // don't report error to grunt if webpack find errors
                // Use this if webpack errors are tolerable and grunt should continue

                watch: true, // use webpacks watcher
                // You need to keep the grunt process alive

                keepalive: true, // don't finish the grunt task
                // Use this in combination with the watch option

                inline: true,  // embed the webpack-dev-server runtime into the bundle
                // Defaults to false

            }
        }
    });
    grunt.registerTask('default', ['clean', 'sass', 'concat:dist', 'babel', 'webpack']);
    grunt.registerTask('build', ['clean']);
};
