const pug = require('pug');
const loader = require('sass-loader');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(woff|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name]/[name][ext]'
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/svg/[name][ext]'
        },
      },
      {
        test: /\.png$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]'
        },
      },
    ]
  },
};