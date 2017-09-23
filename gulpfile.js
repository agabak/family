"use strict";
var gulp = require("gulp");
var del = require("del");
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["build"], cb);
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", ["server", "app", "assets","bootstrapcss","imgbuild"], function () {
    console.log("Building resources...");
});
/* copy the app core files to the build folder */
gulp.task("app", ['index'], function(){
    return gulp.src(["app/**", "!app/**/*.ts"])
        .pipe(gulp.dest("build/app"));
});
/* get the index file to the root of the build */
gulp.task("index", function(){
    return gulp.src(["index.html"])
        .pipe(gulp.dest("build"));
});
/* copy node server to build folder */
gulp.task("server", function () {
    return gulp.src(["index.js", "package.json"], { cwd: "server/**" })
        .pipe(gulp.dest("build"));
});
/* styles and other assets */
gulp.task("assets", function(){
    return gulp.src(["css/styles.css"])
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("build/content"));
});
      
/* styles and other bootstrap */
gulp.task("bootstrapcss", function(){
    return gulp.src(["node_modules/bootstrap/dist/css/bootstrap.min.css"])
        .pipe(gulp.dest("build/content/bootstrap"));
});

/* styles and other img */
gulp.task("imgbuild", function(){
    return gulp.src(["img/*.jpg"])
        .pipe(gulp.dest("build/content/img"));
});
/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {
    return gulp.src([
        'es6-shim/es6-shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'angular2/bundles/angular2-polyfills.js',
        'angular2/es6/dev/src/testing/shims_for_IE.js',
        'systemjs/dist/system.src.js',
        'rxjs/bundles/Rx.js',
        'angular2/bundles/angular2.dev.js',
        'angular2/bundles/router.dev.js',
        'bootstrap/dist/js/bootstrap.min.js',
        'jquery/dist/jquery.min.js',
        'font-awesome/**',
        'font-awesome/**/*.map',
        '!font-awesome/.npmignore',
        '!font-awesome/*.txt',
        '!font-awesome/*.md',
        '!font-awesome/*.json'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/libs"));
});
/**
 * Build the project.
 */
gulp.task("default", ['resources', 'libs'], function () {
    console.log("Building the project ...");
});
