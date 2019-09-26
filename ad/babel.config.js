module.exports = function (api) {
  api.cache(true)

  const presets = [
    ['@babel/preset-env',
      {
        'targets': {
          'browsers': 'last 2 versions, > 1%, ie >= 6, Chrome >= 29, Firefox >= 55, Safari >= 9, Android >= 4, iOS >= 9, and_uc > 11',
          'node': '4'
        },
        'modules': 'commonjs',
        'loose': false,
        'corejs': 3
      }]
  ]
  const plugins = [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from'
  ]

  return {
    presets,
    plugins,
    comments: false
  }
}
