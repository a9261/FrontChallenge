"use strict"
var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
function resolve(dir) {
    return path.join(__dirname, dir)
}

var config = {}
config.optimization = {
    // 用套件時，啟用以下設定會有問題，要再詳查
    // splitChunks: {
    //     cacheGroups: {
    //         styles: {
    //             name: 'styles',
    //             test: /\.css$/,
    //             chunks: 'all',
    //             enforce: true
    //         }
    //     }
    // }
}
config.target = 'web';
//Setting Envirnoment
config.mode = 'development';
config.devtool = 'source-map',
config.entry = {
    day1: './src/js/day1/main.jsx',
    day2: './src/js/day2/main.jsx',
    day3: './src/js/day3/main.jsx',
    day4: './src/js/day4/main.js',
    day5: './src/js/day5/main.js',
    day6: './src/js/day6/main.js'
}
config.output = {
    // path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // filename: '[name].[hash].js',
    // chunkFilename:'[name].js', publicPath: "/assets/"
    publicPath: '',
    sourceMapFilename: '[file].map'
}
config.resolve = {
    extensions: [".ts", ".tsx", ".jsx", ".js", ".json", '.scss', '.css']
}
// config.externals={     "react": "React",     "react-dom": "ReactDOM" } module
// setting
config.module = {
    rules: [
        {
            enforce: "pre",
            test: /\.js$/,
            use: ['source-map-loader']
        }, {
            test: /\.tsx?$/,
            use: ['awesome-typescript-loader']
        }, {
            test: /\.(js|jsx|mjs)$/,
            exclude: [resolve('node_modules')],
            // include: [path.resolve(__dirname, 'src')],
            use: {
                loader: 'babel-loader',
                options: {
                    //   presets: ['@babel/preset-env']
                    presets: ['env', 'react'],
                    plugins:["syntax-dynamic-import"]
                }
            }
        }, {
            test: /\.scss$/,
            use: [
                // MiniCssExtractPlugin.loader, 
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }
                , {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')({
                                'browsers': ['> 1%', 'last 2 versions']
                            })]
                    }
                }
                ,{
                loader:'sass-loader',
                options:{
                    // includePaths: [path.resolve(__dirname, 'node_modules/react-datepicker')]
                }
              }
            ]
        }, {
            test: /\.css$/,
            use: [
                // MiniCssExtractPlugin.loader, 
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }
                , {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')({
                                'browsers': ['> 1%', 'last 2 versions ']
                            })]
                    }
                }
            ]
        }, {
            test: /\.txt$/, // MyLoader Test
            use: [
                {
                    loader: path.resolve(__dirname, 'myLoader.js'),
                    options: {
                        name: 'Alice'
                    }
                }
            ]
        }
    ]
}
config.plugins = [
    new webpack.HotModuleReplacementPlugin({title: 'Hot Module Replacement'}),
    // new CleanWebpackPlugin(paths [, {options}])
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
        filename: 'day1.html', 
        template: './src/challengs/day1.html', 
        inject: true, hash: true, chunks: ['day1']
    }),
    new HtmlWebpackPlugin({
        filename: 'day2.html', 
        template: './src/challengs/day2.html',
        inject: true, hash: true, chunks: ['day2']
    }),
    new HtmlWebpackPlugin({
        filename: 'day3.html', 
        template: './src/challengs/day3.html',
        inject: true, hash: true, chunks: ['day3']
    }),
    new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', "window.jQuery": "jquery"}),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output both options are
        // optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
]
config.devServer = {
    // inline: true,
    port: 9000,
    hot: true,
    compress: true,
    inline: true,
    watchContentBase: true,
    historyApiFallback: true,
    contentBase: './dist',
    historyApiFallback: {
        index:'day2.html',
        rewrites: [
            { from: /^\/day2/, to: 'day2.html' }
        ]
    }
}

module.exports = config;