const path = require('path');
// const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
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
    ],
    devtool: 'cheap-source-map',
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules'),
        ],
        alias: {
            '~': path.resolve(__dirname, 'src', 'app'),
        },
        extensions: ['.js', '.jsx'],
    },
};
