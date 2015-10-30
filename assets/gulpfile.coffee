gulp        = require 'gulp'
gutil       = require 'gulp-util'
path        = require 'path'
browserify  = require 'browserify'
babelify    = require 'babelify'
watchify    = require 'watchify'
source      = require 'vinyl-source-stream'
bundleLogger  = require './gulp/util/bundleLogger'
handleErrors  = require './gulp/util/handleErrors'

Path =
  assets: './assets/'
  static: './static/'

gulp.task 'default', ()->
  stream = browserify
    debug: false
    cache: {}
    packageCache: {}
    basedir: __dirname
    entries: [path.join(__dirname, '/app.jsx')]
    fullPaths: false
    extensions: ['.js', '.jsx']
    transform : [babelify]

  bundle = ()->
    bundleLogger.start(Path.assets + 'app.jsx')
    stream.bundle().on('error', handleErrors)
    .pipe(source('app.js'))
    .pipe gulp.dest Path.static + 'js'
    .on 'end', reportFinished

  reportFinished = ->
    # Log when bundling completes
    bundleLogger.end('app.jsx')

  bundle()