
var project = require('./project.json'),
        gulp = require('gulp'),
        clean = require('gulp-clean'),
        concat = require('gulp-concat'),
        jshint = require('gulp-jshint'),
        uglify = require('gulp-uglify'),
        minifyCss = require('gulp-minify-css'),
        rename = require('gulp-rename'),
        bower = require('gulp-bower'),
        fs = require("fs"),
        ts = require('gulp-typescript'),
        webserver = require('gulp-webserver'),
        sass = require("gulp-sass");

gulp.task("bower", function () {
    bower();
});

gulp.task('scripts', function() {
    return gulp.src('src/TypeScript/**/*.ts')
    .pipe(ts({
		"module": "amd",
		"sourceMap": false,
		"watch": false,
		"target": "ES5"
	}))
    .pipe(concat('myapp.js'))
    .pipe(uglify())
    .pipe(rename({
       extname: '.min.js'
     }))
     .pipe(gulp.dest(project.webroot + '/js/'));
});

gulp.task('sass', function () {
    gulp.src('src/SCSS/resume.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest(project.webroot + '/css'));
});

gulp.task("watch", function () {
    gulp.watch("src/TypeScript/*.ts", ['scripts'])
    gulp.watch("src/SCSS/*.scss", ['sass']);
});

gulp.task('build', ['bower', 'scripts', 'sass']);

 gulp.task('webserver', function() {
  gulp.src('wwwroot')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: 'index.html'
    }));
});