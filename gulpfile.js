var gulp = require('gulp');
var scanner = require('i18next-scanner');

gulp.task('i18n', function() {
    return gulp.src(['public/**/*.{js,html}'])
        .pipe(scanner({
            debug: false,
            sort: false,
            attr: {
                list: ['data-i18n'],
                extensions: ['.html']
            },
            func: {
                list: ['i18next.t', 'i18n.t'],
                extensions: ['.js', '.jsx']
            },
            resource: {
                loadPath: 'i18n/{{lng}}.json',
                savePath: 'i18n/{{lng}}.json',
            },
            lngs: ['ru', 'en', 'de'], // supported languages
            resource: {
                // the source path is relative to current working directory
                loadPath: 'public/i18n/{{lng}}.json',
                // the destination path is relative to your `gulp.dest()` path
                savePath: 'i18n/{{lng}}.json'
            }
        }))
        .pipe(gulp.dest('public'));
});
