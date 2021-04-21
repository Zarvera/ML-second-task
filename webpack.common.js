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
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: "pug-loader",
            },
            {
                test: /\.(woff|eot|ttf|otf|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[name]/[name][ext]'
                },
            },
        ]
    },
};