module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    pagespeed: {
     options: {
        nokey: true,
        //url: "http://7887571b.ngrok.io"
      },
      /**
      prod: {
          url: "http://44fc39db.ngrok.io",
          locale: "en_GB",
          strategy: "desktop",
          threshold: 30
      },*/
      prod: {
          url: "http://69be0d8d.ngrok.io",
          locale: "en_GB",
          strategy: "mobile",
          threshold: 30
      },
      /**prod: {
          url: "http://7887571b.ngrok.io/views/pizza.html",
          locale: "en_GB",
          strategy: "desktop",
          threshold: 30
      },
      prod: {
          url: "http://7887571b.ngrok.io/views/pizza.html",
          locale: "en_GB",
          strategy: "mobile",
          threshold: 30
      }*/
    },

    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'index.html': 'src/index.html',          // 'Destination' : 'Source'
          'project-2048.html': 'src/project-2048.html'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-pagespeed');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['htmlmin']);
};