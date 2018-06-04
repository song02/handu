const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('sass',function(){
	gulp.src('src/scss/*.scss').pipe(sass().on("error",sass.logError)).pipe(rename({"suffix":".min"})).pipe(cssnano()).pipe(gulp.dest('css'));
});

gulp.task('js',function(){
	gulp.src('src/js/*.js').pipe(uglify()).pipe(rename({"suffix":".min"})).pipe(concat("index.min.js")).pipe(gulp.dest('js'));
});

gulp.task('watch',function(){
	gulp.watch(['src/scss/*.scss','src/js/*.js'],['sass','js']);
});
