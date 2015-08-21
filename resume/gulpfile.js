/// <binding BeforeBuild='bower' ProjectOpened='watcher' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var project = require('./project.json'),
        gulp = require('gulp'),
        clean = require('gulp-clean'),
        concat = require('gulp-concat'),
        jshint = require('gulp-jshint'),
        uglify = require('gulp-uglify'),
        rename = require('gulp-rename'),
        bower = require('gulp-bower'),
        rimraf = require("rimraf"),
        fs = require("fs"),
        less = require("gulp-less"),
        sass = require("gulp-sass");


gulp.task("build", function () {
    
    bower();
    gulp.src(['src/TypeScript/Tastes.js', 'src/TypeScript/Food.js'])
                .pipe(concat("combined.js"))
                .pipe(jshint())
                .pipe(uglify())
                .pipe(rename({
                    extname: '.min.js'
                }))
                .pipe(gulp.dest('wwwroot/lib'));
});

gulp.task('resume', function () {
    gulp.src('src/resume.html').pipe(gulp.dest(project.webroot + '/'));
});

gulp.task('sass', function () {
    gulp.src('src/SCSS/resume.scss')
        .pipe(sass())
        .pipe(gulp.dest(project.webroot + '/css'));
});

gulp.task("watcher", function () {
    gulp.watch("src/TypeScript/*.js", ['build']);
    gulp.watch("src/SCSS/*.scss", ['sass']);
    gulp.watch("src/*.html", ['resume']);
});

gulp.task("cleanAll", function () {
    gulp.src('wwwroot/lib/*').pipe(clean());
    gulp.src(project.webroot + '/css/*').pipe(clean());
});