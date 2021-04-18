const path = require("path");
const pug = require("pug");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const loader = require("sass-loader");
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js",
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [new HtmlWebpackPlugin({
        template: "src/index.pug"
    }), new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: "pug-loader",
                options: {
                    pretty: true
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(woff|eot|ttf|otf|svg)$/i,
                type: "asset/inline",
            },
        ]
    },
};