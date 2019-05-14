const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.pug$/,
            use: ["pug-loader"]
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            },
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
            },
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'colors-types.html',
            template: './src/colors-types.pug'
        }),
        new ExtractTextPlugin('style.css')
    ]
};