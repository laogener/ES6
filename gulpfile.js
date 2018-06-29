var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var babel = require('gulp-babel');

gulp.task('js',function () {
    gulp.src('./src/index.js')
        .pipe(babel({
            presets:['es2015']
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(reload({stream:true}))
});
gulp.task('default',function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port:'8080'
    });
    gulp.watch('src/*.js',['js'])
});