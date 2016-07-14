const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var testFiles = ['test/**/*.js'];
var allFiles = ['test/**/*.js', 'lib/**/*.js', 'gulpfile.js'];

gulp.task('lint:all', () => {
  gulp.src(allFiles)
  .pipe(eslint({
    rules: {
      'no-console': 0,
      'indent': [2, 2],
      'quotes': [2, 'single'],
      'linebreak-style': [2, 'unix'],      'semi': [2,'always']
    },
    envs: [
      'node',
      'es6',
      'browser'
    ],
    globals: [
      'describe',
      'it',
      'beforeEach',
      'afterEach',
      'before',
      'after'
    ],
    ecmaFeatures: {
      'modules': true,
      'experimentalObjectRestSpread': true,
      'impliedStrict': true
    },
    extends: 'eslint:recommended'
  }))
  .pipe(eslint.format());
});

gulp.task('mocha:test', () => {
  gulp.src(testFiles)
  .pipe(mocha());
});

gulp.task('watch:files', () => {
  gulp.watch(testFiles, ['mocha:test']);
  gulp.watch(allFiles, ['lint:all']);
});

gulp.task('default', ['lint:all', 'mocha:test', 'watch:files']);
