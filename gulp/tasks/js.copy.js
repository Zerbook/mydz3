'use strict';

module.exports = function() {
    $.gulp.task('js:copy', function() {
        return $.gulp.src(['./source/js/libs.js','./source/js/app.js'], { since: $.gulp.lastRun('js:copy') })
            //.pipe($.gp.imagemin())
            .pipe($.gulp.dest($.config.root + '/assets/js'));
    });
};