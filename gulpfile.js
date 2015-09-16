var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    babel = require('gulp-babel');

var pathJade = {
    jade: ['lib/*.jade'],
    html: 'public/'
};
var pathStyl = {
    styl: ['lib/*.styl'],
    css: 'public/css'
};
var pathBabel = {
    babel: ['lib/**/*.js'],
    js: 'public/js'
};
gulp.task('jade', function() {
    return gulp.src(pathJade.jade)
    .pipe(jade({
        pretty: true
    }))

    .pipe(gulp.dest(pathJade.html))
});
gulp.task('styl', function () {
  gulp.src(pathStyl.styl)
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest(pathStyl.css));
});
gulp.task('babel', function () {
    return gulp.src(pathBabel.babel)
        .pipe(babel())
        .pipe(gulp.dest(pathBabel.js));
});

gulp.task('tiemporeal', function () {

    gulp.watch(pathJade.jade, ['jade']);
    gulp.watch(pathStyl.styl, ['styl']);
    gulp.watch(pathBabel.babel, ['babel']);

});

