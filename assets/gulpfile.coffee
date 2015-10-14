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

vendors = [
  'es6-promise'
  'flux'
  'immutable'
  'lodash'
  'material-ui'
  'react'
  'react-dom'
  'react-router'
  'history'
]

Task =
  Vendor: (args)->
    ((o)->
      stream = browserify(
        debug: false
        require: vendors
      )
      stream.bundle()
      .pipe(source(o.fileName + '.js'))
      .pipe(gulp.dest(Path.static + 'js/vendor'))

      stream
    ) args
  Jsx : (args)->
    ((o)->
      o.vendors = false

      stream = browserify
        debug: o.env isnt 'production'
        cache: {}
        packageCache: {}
        basedir: __dirname
        fullPaths: false
        paths: [
          path.join(__dirname, o.dirName)
        ]
        entries: [path.join(__dirname, '/' + o.fileName + '.jsx')]
        extensions: ['.js', '.jsx']
        transform : [babelify]

      if o.env isnt 'production'

        if o.vendors is false
          o.vendors = true
          Task.Vendor(fileName: o.fileName)

        vendors.forEach (vendor)->
          stream.external vendor
      else
        stream.require vendors
        o.fileName = o.fileName + '.min'

      bundle = ()->
        bundleLogger.start(o.fileName)
        stream.bundle().on('error', handleErrors)
        .pipe(source(o.fileName + '.js'))
        .pipe(if o.env is 'production' then streamify(uglify(mangle: false)) else gutil.noop())
        .pipe gulp.dest Path.static + 'js'
        .on 'end', reportFinished

      if global.isWatching
        # Wrap with watchify and rebundle on changes
        stream = watchify(stream)
        # Rebundle on update
        stream.on 'update', bundle

      reportFinished = ->
        # Log when bundling completes
        bundleLogger.end(o.fileName)

      bundle()

    ) args

gulp.task 'setWatch', ->
  global.isWatching = true;

gulp.task 'adm', ()->
  Task.Jsx({dirName: '/adm/', fileName: 'adm', env : 'development'})

gulp.task 'default', [
  'setWatch'
  'adm'
]