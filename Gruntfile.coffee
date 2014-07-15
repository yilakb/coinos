module.exports = (grunt) ->
  grunt.initConfig(
    pkg: grunt.file.readJSON('package.json')
    less: 
      css: 
        options: 
          paths: ["public/css"]
        files: [
          expand: true
          cwd: 'public/css'
          src: ['*.less']
          dest: 'public/css'
          ext: '.css'
        ]
    coffee:
      glob_to_multiple: 
        expand: true
        cwd: 'public/js'
        src: '**/*.coffee'
        dest: 'public/js'
        ext: '.js'
    watch: 
      less: 
        files: ['public/css/**/*.less']
        tasks: ['less']
      coffee:
        files: ['public/js/**/*.coffee']
        tasks: ['coffee']
  )

  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.registerTask('default', ['less', 'coffee']);
