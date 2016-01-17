var path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [
            './src/main.js'
        ]
    },
    output: {
        filename: './[name].js',
        path: 'dist'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src'),
                loader: 'style!css!sass'
            }
        ]
    }
}
