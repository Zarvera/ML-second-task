const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css',
    })],
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