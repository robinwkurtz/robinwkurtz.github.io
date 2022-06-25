const { src, dest, parallel, series, watch } = require('gulp');
const insert = require('gulp-insert');
const minifyCSS = require('gulp-minify-css');
const plumber = require('gulp-plumber');
const rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const browsersync = require('browser-sync');
const fileinclude = require('gulp-file-include');
const markdown = require('gulp-markdown')


const notice = '/**\n* This is compiled code, see readme in root directory for more details.\n*/\n\n';

// html
const html = series(content, markup)

// content
function content() {
    return src('./markup/content/*.md')
        .pipe(markdown())
        .pipe(rename(function (path) {
            path.basename = path.basename + ".compiled";
        }))
        .pipe(dest('./markup/compiled/'))
}

// markup
function markup() {
    return src('./markup/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./'))
};

// styles
function styles() {
    return src('./assets/scss/style.scss')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(sass())
        .pipe(minifyCSS({ compatibility: 'ie8' }))
        .pipe(insert.prepend(notice))
        .pipe(rename(function (path) {
            path.basename = path.basename + ".compiled";
        }))
        .pipe(dest('./assets/css/'))
}


// scripts
function scripts() {
    return src('./assets/scripts/main.js')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(uglify())
        .pipe(insert.prepend(notice))
        .pipe(rename(function (path) {
            path.basename = path.basename + ".compiled";
        }))
        .pipe(dest('./assets/scripts/'))
}

// Watch files
function watchFiles() {
    // Watch template changes    
    watch(['./markup/content/*.md', './markup/*.html', './partials/*.html'], series(content, markup))
    // Watch style changes    
    watch(['./assets/scss/**/*.scss', './scss/*.scss'], parallel(styles))
    // Watch script changes    
    watch(['./assets/scripts/main.js'], parallel(scripts))
}

// helper
function onError(err) {
    console.log(err);
}

const watching = parallel(watchFiles);

exports.watch = watching
exports.build = parallel(html, styles, scripts)
exports.default = parallel(html, styles, scripts);
