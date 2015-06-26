// Dependencies

var gulp   = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Build Task

gulp.task('build', function() {
	return gulp.src([
			'src/*.js',
			'src/dom/*.js',
		]).pipe(concat('cork.js'))
		.pipe(gulp.dest('dist/'));
});

// Minify Task

gulp.task('minify', ['build'], function() {
	return gulp.src('dist/cork.js')
		.pipe(concat('cork.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/'));
});

// Default Task

gulp.task('default', ['minify']);
