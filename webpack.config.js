const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        path: 'build',
        filename: 'build.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.(gif|png|jpe?g|svg)$/, loader: 'url?limit=8192&name=images/[hash].[ext]' }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'assets', to: 'assets' }
        ])
    ]
}
