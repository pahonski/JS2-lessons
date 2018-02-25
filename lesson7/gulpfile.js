var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifyJs = require('gulp-uglifyjs'),
    autoprefixer = require('gulp-autoprefixer'),
    imageMin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync');

/**
 * 1.gulp.task() - Объявляет новую задачу
 * 2.gulp.src() - Отвечает за выборку файлов
 * 3.gulp.dest() - Определяет выходную дерикторию для файлов
 * 4.gulp.watch() - Метод для контроля изменений файлов
 */

var config = {
    app: './app',
    dist: './dist'
};

gulp.task('test', function () {
    console.log('Gulp works!');
});

//SASS

gulp.task('sass', function () {
    gulp.src(config.app + '/sass/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(config.dist + '/css'))
        .pipe(browserSync.reload({stream: true}))
});

//HTML

gulp.task('html', function () {
    gulp.src([config.app + '/index.html'])
        .pipe(gulp.dest(config.dist))
        .pipe(browserSync.reload({stream: true}))
});

//JS

gulp.task('js', function () {
    gulp.src(config.app + '/js/**/*.js')
        .pipe(uglifyJs())
        .pipe(gulp.dest(config.dist + '/js'))
        .pipe(browserSync.reload({stream: true}))
});

//Watch
gulp.task('watch', function () {
    gulp.watch(config.app + '/js/**/*.js', ['js']);
    gulp.watch([config.app + '/index.html'], ['html']);
    gulp.watch(config.app + '/sass/**/*.sass', ['sass']);
});

//Image
gulp.task('image', function () {
    gulp.src(config.app + '/img/**/*.jpg')
        .pipe(imageMin())
        .pipe(gulp.dest(config.dist + '/img'))
});

//Task server
gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: config.dist
        }
    });
});


gulp.task('default', ['test', 'sass', 'html', 'js', 'watch', 'server'], function () {
    console.log('Default task works!');
});

