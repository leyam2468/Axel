var gulp = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var sourcemap = require('gulp-sourcemaps');


// html task
gulp.task('html',function(){
    return gulp.src('input/pug/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('output'))
});

// css Tast
gulp.task('css',function(){
    return gulp.src('input/style/*.scss')
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(prefix())
        .pipe(concat('main.css'))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest('output/style'))
});

// js Tast
gulp.task('js',function(){
    return gulp.src('input/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('output/js'))
});

// watch task 
gulp.task('watch',function(){
    gulp.watch('input/pug/**/*.pug',gulp.series('html'));
    gulp.watch('input/style/**/**.scss',gulp.series('css'));
    gulp.watch('input/js/**/**.js',gulp.series('js'));
});
// Default Task 
gulp.task('default', gulp.parallel('watch'));