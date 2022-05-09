'use strict'
	var gulp = require('gulp'), sass = require('gulp-sass'), browserSync = require('browser-sync');
	gulp.task('sass', function(){

		gulp.src('./css/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./css'));
	});

	gulp.task('sass:watch', function(){
		gulp.watch('./css/*.scss', ['sass']);
	});

	gulp.task('browser-sync', funtion(){

		var files = ['./*.html', './css/*.css', './img/*.{jpg, png, gif}', './js/*.js']
		browserSync.init(files,{
			server:{
				baseDir:'./'
			}
		});
	});