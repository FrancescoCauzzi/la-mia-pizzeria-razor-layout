/*
OLD SYNTAX
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


gulp.task('sass', function () {
    return gulp.src('./wwwroot/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./wwwroot/css/compiled'));
});

gulp.task('watch', function () {
    gulp.watch('./wwwroot/css/*.scss', gulp.series('sass'));
});
*/

///////////////// BEST PRACTICE functional syntax /////////////////
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Define the 'sass' task
function compileSass(cb) {
    return src('./wwwroot/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./wwwroot/css/compiled'));
}

// Define the 'watch' task
function watchSass(cb) {
    watch('./wwwroot/css/*.scss', series(compileSass));
    cb();
}

// Export tasks

exports.compileSass = compileSass;
exports.watchSass = watchSass;
exports.default = series(compileSass, watchSass);
