const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');
const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/'
};
const PAGES_DIR = `${PATHS.src}/templates`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    ...PAGES.map(page => new HtmlWebpackPlugin ({
    template: `${PAGES_DIR}/${page}`,
    filename: `./${page.replace(/\.pug/,'.html')}`
    }))
  ],
  module: {
    rules: [
      {
        test: /\.(c|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')
                ],
              },
            },
          },
          'sass-loader'
        ],
      },
    ],
  },
});