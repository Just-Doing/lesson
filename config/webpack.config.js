const devConfig = require('./webpack.development.config.js')
const proConfig = require('./webpack.production.config.js')

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return devConfig;
  }
  if (argv.mode === 'production') {
    return proConfig
  }
  return devConfig;
};