const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    'entry': './src/index.js',
    output: {
        path:path.resolve(_dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions:['.js'],
    },
    module: {
        rules:[
            {
                test:/\.js?$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                }
            }
        ]
    }
}