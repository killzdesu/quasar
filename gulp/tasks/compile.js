'use strict';

var types = {
  'js': ['js:lint'],
  'css': ['css:lint']
};

function compile(type, production) {
  return gulp.src(config[type].src)
    .pipe(plugins.pipes[type].compile({
      prod: production,
      pack: config.js.webpack
    }))
    .pipe(plugins.rename('quasar.' + (production ? 'min.' : '') + type))
    .pipe(gulp.dest(config[type].dest));
}

Object.keys(types).forEach(function(type) {
  var deps = types[type];

  gulp.task(type + ':lint', function() {
    return gulp.src(config.lint[type])
      .pipe(plugins.pipes[type].lint());
  });

  gulp.task(type + ':dev', deps, function() {
    return compile(type);
  });

  gulp.task(type + ':prod', deps, function() {
    return compile(type, true);
  });
});
