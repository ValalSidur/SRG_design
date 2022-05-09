module.exports = function(grunt){
	require('time-grunt')(grunt);
	require('jit-grunt')(grunt, {
		useminPrepare: 'grunt-usemin'

	});
	grunt.initConfig({
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.scss'],
					dest: 'css',
					ext: '.css'
				}]
			}
		},
		watch: {
			files: ['css/*.css'],
			task: ['css']
		},
		browserSync:{
			dev:{
				bsFiles: {
					src: [
						'css/*.css',
						'*.html',
						'JS/*.js'
					]
				}
			},
			options:{
				watchTask:true,
				server:{
					baseDir: './' //Directorio base para nuestro servidor
				}
			}
		},
		imagemin:{
			dynamic:{
				files:[{
					expand:true,
					cwd: './',
					src:  'images/*.{png,gif,jpg,jpeg}',
					dest: 'dist/'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('css', '['sass']');
	grunt.registerTask('img:compress', ['imagemin']);
	grunt.registerTask('default',['browserSync', 'watch']);
};