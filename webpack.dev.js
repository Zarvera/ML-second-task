const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/i,
                use: [
                    'style-loader',
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