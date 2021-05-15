const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pug = require("pug");
const loader = require("sass-loader");
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.pug'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: "pug-loader",
            },
            {
                test: /\.(woff|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'assets/fonts/[name]/[name][ext]'
                },
            },
            {
              test: /\.svg$/i,
              type: "asset/resource",
              generator: {
                  filename: 'assets/svg/[name][ext]'
              },
          },
        ]
    },
};