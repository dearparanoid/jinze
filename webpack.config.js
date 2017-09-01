const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './main.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'eslint-loader',
                enforce: 'pre'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader',
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
        ]
    },
    resolve: {
        modules: [
            path.resolve('./scss'),
            path.resolve('./node_modules'),
            path.resolve('./components')
        ]
    },
}