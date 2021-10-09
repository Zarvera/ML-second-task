const webpack = require('webpack');
const path = require('path')
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/'
};

const PAGES_DIR = `${PATHS.src}/templates`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    'form-elements': `${PATHS.src}/assets/js/form-elements.js`,
    'colors-and-type': `${PATHS.src}/assets/js/colors-and-type.js`,
    'cards': `${PATHS.src}/assets/js/cards.js`,
    'header-and-footer': `${PATHS.src}/assets/js/header-and-footer.js`,
    'landing-page': `${PATHS.src}/assets/js/landing-page.js`,
    'search-room': `${PATHS.src}/assets/js/search-room.js`,
    'room-details': `${PATHS.src}/assets/js/room-details.js`,
    'registration': `${PATHS.src}/assets/js/registration.js`,
    'log-in': `${PATHS.src}/assets/js/log-in.js`
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true, url: false}
          }, {
            loader: 'postcss-loader',
            options: {sourceMap: true, postcssOptions: {config: `src/js/postcss.config.js`}}
          }, {
            loader: 'sass-loader',
            options: {sourceMap: true}
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Chart: 'chart.js/auto/auto.js'
    }),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: `${PATHS.src}/blocks/`,
          from: "**/*.jpg",
          to: `${PATHS.assets}img/[name][ext]`,
          noErrorOnMissing: true
        },
        {
          from: `${PATHS.src}/assets/img/`,
          to: `${PATHS.assets}img/[name][ext]`,
          noErrorOnMissing: true
        },
        {
          context: `${PATHS.src}/blocks/`,
          from: "**/*.png",
          to: `${PATHS.assets}img/[name][ext]`,
          noErrorOnMissing: true
        },
        {
          from: `${PATHS.src}/${PATHS.assets}fonts`,
          to: `${PATHS.assets}fonts`
        },
        {
          from: `${PATHS.src}/${PATHS.assets}svg`,
          to: `${PATHS.assets}svg`
        }
      ]
    }),
    ...PAGES.map(page => new HtmlWebpackPlugin ({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`,
      chunks: [`${page.slice(0, -4)}`]
      }))
  ],
};