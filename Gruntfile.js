module.exports = function(grunt) {

  grunt.initConfig({
    uncss: {
      dist: {
          options: {
            stylesheets  : ['css/bootstrap.min.css']
          },
        files: {
        'css/bootstrap.min.tidy.css': ['index.html']
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-uncss');

  grunt.registerTask('default', ['uncss']);

};