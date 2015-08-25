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
        minifyCss = require('gulp-minify-css'),
        rename = require('gulp-rename'),
        bower = require('gulp-bower'),
        rimraf = require("rimraf"),
        fs = require("fs"),
        less = require("gulp-less"),
        sass = require("gulp-sass");


gulp.task("build", function () {
    bower();

});


gulp.task("ts", function () {
    gulp.src('src/TypeScript/*.js')
    .pipe(concat('myapp.js'))
    .pipe(jshint())
    .pipe(gulp.dest(project.webroot + '/js'));
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

gulp.task("watcher", function () {
    gulp.watch("src/TypeScript/*.ts", ['ts'])
    gulp.watch("src/SCSS/*.scss", ['sass']);
});

gulp.task("cleanAll", function () {
    gulp.src('wwwroot/lib/*').pipe(clean());
    gulp.src(project.webroot + '/css/*').pipe(clean());
});