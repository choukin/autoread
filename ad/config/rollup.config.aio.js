/* eslint-disable no-undef */
// rollup.config.js
// umd
var postcss = require('rollup-plugin-postcss')
var nodeResolve = require('rollup-plugin-node-resolve')
var commonjs = require('rollup-plugin-commonjs')
var uglify = require('rollup-plugin-uglify')
var common = require('./rollup.js')
var scss = require('rollup-plugin-scss')
var prod = process.env.NODE_ENV === 'production'
var simplevars = require('postcss-simple-vars')
var nested = require('postcss-nested')
var cssnext = require('postcss-cssnext')
var cssnano = require('cssnano')
module.exports = {
  input: 'src/index.' + common.type,
  output: {
    // file: prod ? '../src/lib/index.aio.min.js' : '../src/lib/index.aio.js',
    file: prod ? 'dist/v0.0.1/index.aio.min.js' : 'dist/v0.0.1/index.aio.js',

    format: 'umd',
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    name: common.name,
    banner: common.banner
  },
  plugins: [
    // scss(),
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false }),
        cssnano()
      ],
      extensions: [ '.css' ]
    }),
    nodeResolve({
      main: true,
      jsnext: true,
      browser: true,
      extensions: [common.type === 'ts' ? '.ts' : '', '.js']
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    common.getCompiler(),
    (prod && uglify())
  ]
}
