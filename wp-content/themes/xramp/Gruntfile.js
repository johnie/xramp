module.exports = function(grunt) {
  // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true
      },
      compass: {
        files: ['style/**/*.{scss,sass}'],
        tasks: ['compass']
      },
    },

    compass:{
      dist:{
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
        sourceMap: true,
        sourceMapName: 'js/sourcemap/main.map'
      },
      my_target: {
        files: {
          'js/main.min.js': ['js/**/*.js']
        }
      }
    },

    concurrent: {
      target: {
        tasks: ['watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });

  grunt.registerTask('scripts', ['uglify']);

  grunt.registerTask('default', ['concurrent']);
  
};
