var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	jade = require('gulp-jade'),
	rm = require('gulp-rimraf'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	stylish = require('jshint-stylish'),
	spawn = require('child_process').spawn,
	node;

//	rename = require('gulp-rename'),

gulp.task('clean', function(){
	return gulp.src('public/*')
		.pipe(rm());
});

gulp.task('lint', function() {
	return gulp.src('_js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'));
});

gulp.task('build-js', function() {
	gulp.src([
//		'./bower_components/hammerjs/hammer.js',
		'./bower_components/angular/angular.js',
		'./bower_components/angular-animate/angular-animate.js',
		'./bower_components/angular-aria/angular-aria.js',
		'./bower_components/angular-material/angular-material.js',


		'./bower_components/angular-route/angular-route.js',
		'./bower_components/angular-fontawesome/dist/angular-fontawesome.js',

		'./_js/app.js',
		'./_js/services/**/*.js',
		'./_js/controllers/main.js',
	])
		.pipe(concat('app.js'))
//		.pipe(uglify())
		.pipe(gulp.dest('./public/'));
});

gulp.task('build-less', function() {
	gulp.src([
		'./bower_components/angular-material/angular-material.css',
		'./bower_components/font-awesome/css/font-awesome.css',
		'./_less/**/*',
//		'./_js/*.js',
	])

		.pipe(concat('style.css'))
		.pipe(less())
//		.pipe(uglify())
		.pipe(gulp.dest('./public/css'));
});

gulp.task('build-assets', function() {
	gulp.src([
//		'./_fonts/**/*',
//		'./bower_components/bootstrap-less/fonts/**/*',
		'./bower_components/font-awesome/fonts/**/*',
	])
		.pipe(gulp.dest('./public/fonts'));

	gulp.src(['./_img/**/*'])
		.pipe(gulp.dest('./public/img'));
});

gulp.task('build', ['build-js', 'build-less', 'build-assets'], function() {

});

/**
 * $ gulp server
 * description: launch the server. If there's a server already running, kill it.
 */
gulp.task('run', ['build'], function() {
	if (node) node.kill();

	node = spawn('node', ['app.js'], {stdio: 'inherit'});
	node.on('close', function (code) {
		if (code === 8) {
			gulp.log('Error detected, waiting for changes...');
		}
	});
})

gulp.task('default', function() {
	gulp.run('run');

//	gulp.watch(['./_views/**/*'], ['build-jade']);
	gulp.watch(['./public/views/**/*'], ['build-jade']);
	gulp.watch(['./_js/**/*'], ['build-js']);
	gulp.watch(['./_less/**/*'], ['build-less']);


	gulp.watch(['./app.js', './Gulpfile.js', './public/index.html', './public/partials/**/*'], function() {
		gulp.run('run');
	});

	// Need to watch for sass changes too? Just add another watch call!
	// no more messing around with grunt-concurrent or the like. Gulp is
	// async by default.
})

// clean up if an error goes unhandled.
process.on('exit', function() {
	if (node) node.kill()
})