const config = {
  ignore: ['.idea', '.pm2', '.vscode', 'dist', 'node_modules'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx'],
        cwd: 'babelrc'
      }
    ],
    ['@babel/plugin-transform-runtime', { regenerator: true }],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    'babel-plugin-macros'
  ],
  presets: [
    ['@babel/env', { targets: { node: 'current' } }],
    '@babel/typescript'
  ],
  sourceMaps: 'inline'
}

module.exports = config
