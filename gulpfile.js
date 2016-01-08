'use strict';

var

gulp = require('gulp'),

jshint = require('gulp-jshint'),

uglify = require('gulp-uglify'),

less = require('gulp-less'),

concat = require('gulp-concat'),

rename = require('gulp-rename'),

notify = require('gulp-notify'),

del = require('del');


// Task: Less
gulp.task('less', function(){

	return gulp

		.src('./source/sheet/*.less', { base: 'source' })

		.pipe( concat('./sheet/style.css') )

		.pipe( rename({ suffix: '.min' }) )

		.pipe( less() )

		.pipe( gulp.dest('./build') )

		.pipe( notify({ message: 'Task Sheet Complete !!' }) );

});

// Task: Less
gulp.task('script', function(){

	return gulp

		.src('./source/script/*.js', { base: 'source' })

		.pipe( concat('main.js') )

		.pipe( rename({ suffix: '.min' }) )

		.pipe( gulp.dest('./build/script') )

//		.pipe( uglify() )

		.pipe( notify({ message: 'Task Script Complete !!' }) );

});

// Task: Default Cleaning
gulp.task('clean', function(cb){

	del(['./build/less', './build/script'], cb);

});

// Task: Watch
gulp.task('watch', function(){

	// Watch Listen Less Files
	gulp.watch('./source/sheet/*.less', ['less']);

	// Watch Listen Script Files
	gulp.watch('./source/script/*.js', ['script']);

});

// Task: Default Running
gulp.task('default', ['clean', 'less', 'script', 'watch']);