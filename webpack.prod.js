const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = merge(commonConfig, {
  mode: 'production',
  plugins: []
});

module.exports = new Promise((resolve, reject) => {
  resolve(prodConfig)
})