var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(cb) {
  var tasks = ['clean',['iconFont', 'images'], ['sass', 'browserify']];
  if(process.env.RAILS_ENV === 'production') tasks.push('rev');
  tasks.push(cb);
  return runSequence.apply(this, tasks);
});
