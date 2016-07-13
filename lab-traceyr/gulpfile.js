const gulp = require('gulp');
const eslint = require('gulp-eslint');

var testFiles = ['test/**/*.js'];
var appFiles = ['lib/**/*.js'];

gulp.task('lint:app', () => {
  gulp.src(appFiles)
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

gulp.task('lint:test', () => {
  gulp.src(testFiles)
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

gulp.task('default', ['lint:app', 'lint:test']);
