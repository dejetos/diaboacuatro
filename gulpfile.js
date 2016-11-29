'use strict';

var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var pagespeed = require('psi');
var reload = browserSync.reload;
var publicUrl = '';
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var spritesmith = require('gulp.spritesmith');


var AUTOPREFIXER_BROWSERS = [
  'ie >= 8',
  'ie_mob >= 10',
  'ff >= 15',
  'chrome >= 30',
  'safari >= 5',
  'opera >= 23',
  'ios >= 6',
  'android >= 2.3',
  'bb >= 10'
];

// lint JavaScript
gulp.task('jshint', function () {
  return gulp.src('js/app/*.js')
    .pipe(reload({stream: true, olsnce: true}))
    .pipe(plugin.jshint())
    .pipe(plugin.jshint.reporter('jshint-stylish'))
    .pipe(plugin.if(!browserSync.active, plugin.jshint.reporter('fail')));
});

// otimizando imagens
gulp.task('images-content', function () {
  return gulp.src(['img/content/*'])
    .pipe(plugin.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('img/content/'));
});

gulp.task('images-layout', function () {
  return gulp.src(['img/layout/*'])
    .pipe(plugin.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('img/layout/'));
});

// Sprites
gulp.task('sprite', function () {
    var spriteData = gulp.src('img/layout/sprites/**/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            imgPath : 'img/layout/sprite.png',
            cssName: '_sprites.scss',
            algorithm: 'top-down'
        }));
    spriteData.img.pipe(gulp.dest('img/layout'));
    spriteData.css.pipe(gulp.dest('src/scss/components'));
});


// copilando o scss e adicionando os prefix
gulp.task('styles', function () {
  return gulp.src(['src/scss/*.scss'])
    .pipe(plugin.changed('styles', {extension: '.scss'}))
    .pipe(plugin.sass().on('error', console.error.bind(console)))
    .pipe(plugin.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(minifyCSS())
    .pipe(gulp.dest('css'));
});

gulp.task('scripts', function() {
  gulp.src(['src/js/main.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/app/'))
});

// observando mudanças para da reload
gulp.task('serve', ['styles', 'scripts'], function () {
  browserSync({
    notify: false,
    proxy: 'localhost/'
  });

  gulp.watch(['src/scss/**/*.scss'], ['styles']);
  gulp.watch(['css/*.css'], reload);
  gulp.watch(['src/js/*.js'], ['scripts']);
  gulp.watch(['js/main/*.js'], ['scripts']);
  gulp.watch(['js/app/*.js'], ['jshint']);
  gulp.watch(['img/layout/sprites/**/*.png'], ['sprite']);
  gulp.watch(['img/content/*', 'img/layout/*'], reload);
});

// google pagespeed insights
// trocar a variavel 'publicUrl' quando o site estiver publico
gulp.task('pagespeed-mobile', pagespeed.bind(null, {
  url: publicUrl,
  strategy: 'mobile'
}));

gulp.task('pagespeed-desktop', pagespeed.bind(null, {
  url: publicUrl,
  strategy: 'desktop'
}));

// Task padrão, exibe o menu de tasks
gulp.task('default', function (callback) {
  plugin.menu(this);
});
