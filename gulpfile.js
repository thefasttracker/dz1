'use strict';

const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const prefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const rigger = require('gulp-rigger');
const reload = browserSync.reload;

gulp.task('server', function () {
	browserSync({
		port: 9000,
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('watch', function () {
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css'
	]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);

// gulp.task('default', function () {
//     return gulp.src('main.css')
//         .pipe(sourcemaps.init())
//         .pipe(cssnano())
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('./out'));
// });