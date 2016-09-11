'use strict';

const _ = require('lodash');

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['eslint', 'browserify']);
  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: ['reactify', {'es6': true}]
        },
        files: {
          'built/script.js': 'app/index.js'
        }
      }
    },
    eslint: {
      options: {
        quiet: _.includes(grunt.cli.tasks, 'eslint')
      },
      target: [
        '*.js',
        'app/**/*.js',
        'app/*.js',
        'server/*.',
        'server/**/*.js'
      ]
    },
    uglify: {
      dist: {
        files: [{
          expand: true,
          cwd: 'built',
          src: '**.js',
          dest: 'built'
        }]
      }
    },
    clean: {
      build: ['build']
    },
    copy: {
      main: {
        files: [{src: 'index.html', dest: 'build/index.html'}]
      }
    }
  });
};
