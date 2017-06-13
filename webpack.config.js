const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: 'src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new WebpackNotifierPlugin({ title: 'Webpack' }),
    ],
    devtool: 'cheap-source-map',
    resolve: {
        root: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
        ],
        alias: {
            '~': path.resolve(`${__dirname}/src/app/`),
        },
        extensions: ['', '.js'],
    },
};
