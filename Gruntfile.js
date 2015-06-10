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
        url: "http://44fc39db.ngrok.io",
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
  }

  });

  grunt.loadNpmTasks('grunt-pagespeed');

  //grunt.registerTask('default', ['ngrok']);
};