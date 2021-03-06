const path = require('path');
// const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/app/main.jsx',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
            },
        ],
    },
    plugins: [
        new WebpackNotifierPlugin({ title: 'Webpack' }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['./', './dist'],
            },
        }),
        /* new webpack.optimize.UglifyJsPlugin({
            compress: true,
            debug: true,
        }),*/
        new ExtractTextPlugin('style.css'),
        new HTMLWebpackPlugin({
            inject: true,
            template: './src/index-template.html',
            filename: `${__dirname}/index.html`,
        }),
    ],
    devtool: 'cheap-source-map',
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules'),
        ],
        alias: {
            '~': path.resolve(__dirname, 'src', 'app'),
            style: path.resolve(__dirname, 'src', 'style'),
        },
        extensions: ['.js', '.jsx'],
    },
};
