/**
 * - Get Bootstrap
 * - Get Bootstrap version
 * - Find all classes in Bootstrap
 * - Define all Bootstrap classes in a JSON and define their Suitstrap equivalent
 */


module.exports = function(grunt) {

	//Load tasks
	require('load-grunt-tasks')(grunt);

	//Show time
	require('time-grunt')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),



		jshint: {
			options: {
				jshintrc: 'js/.jshintrc'
			},
			grunt: {
				options: {
					jshintrc: 'grunt/.jshintrc'
				},
				src: ['Gruntfile.js', 'grunt/*.js']
			}
		},



		jscs: {
			grunt: {
				src: '<%= jshint.grunt.src %>'
			},
		}



		watch: {
			grunt: {
				files: '<%= jshint.grunt.src %>',
				tasks: ['jshint:grunt']
			},
		},

	});

	// Default task(s).
	grunt.registerTask('default', ['']);
};