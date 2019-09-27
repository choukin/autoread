// Rollup plugins
import babel from 'rollup-plugin-babel'
// import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import postcss from 'rollup-plugin-postcss'

// PostCSS plugins
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'
import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'
// import replace from 'rollup-plugin-replace'
// import uglify from 'rollup-plugin-uglify'
var common = require('./rollup.js')
var prod = false
export default {
  entry: 'src/index.js',
  // dest: 'build/js/main.min.js',
  output: {
    file: prod ? 'dist/index.aio.min.js' : 'dist/index.aio.js',
    format: 'umd',
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    name: common.name,
    banner: common.banner
  },
  plugins: [
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false }),
        cssnano()
      ],
      extensions: [ '.css' ]
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    // eslint({
    //   exclude: [
    //     'src/styles/**'
    //   ]
    // }),
    // babel({
    //   exclude: 'node_modules/**'
    // }),
    common.getCompiler()
    // replace({
    //   exclude: 'node_modules/**',
    //   ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    // }),
    // (process.env.NODE_ENV === 'production' && uglify())
  ]
}
