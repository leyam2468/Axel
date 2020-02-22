var gulp = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var pug = require('gulp-pug');


// html task
gulp.task('html',function(){
    return gulp.src('input/pug/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('output'))
});

// css Tast
gulp.task('css',function(){
    return gulp.src('input/style/*.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('output/style'))
});

// js Tast
gulp.task('js',function(){
    return gulp.src('input/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('output'))
});

// watch task 
gulp.task('watch',function(){
    gulp.watch('input/pug/**/*.pug',gulp.series('html'));
    gulp.watch('input/style/**/**.scss',gulp.series('css'));
});
