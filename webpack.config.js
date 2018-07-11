var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, dir)
}

var config = {}

config.target='web';
//Setting Envirnoment
config.mode='development';
config.devtool= 'inline-source-map',
config.entry = {
    day1:'./src/js/day1/main.js',
    day2:'./src/js/day2/main.js',
    day3:'./src/js/day3/main.js',
    day4:'./src/js/day4/main.js',
    day5:'./src/js/day5/main.js',
    day6:'./src/js/day6/main.js',
}
config.output = {
    // path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    // chunkFilename:'[name].js',
    // publicPath: "/assets/"
    publicPath: '',
    sourceMapFilename:'[file].map'
}

//module setting 
config.module = {
    rules: [
        {
            test: /\.js$/,
            exclude:[resolve('node_modules')],
            // include: [path.resolve(__dirname, 'src')],
            use: {
                loader: 'babel-loader',
                // options: {
                //   presets: ['@babel/preset-env']
                // }
            }
        },
        {
            test:/\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        },
        {
            test: /\.txt$/, // MyLoader Test
            use:[{
                loader:path.resolve(__dirname,'myLoader.js'),
                options:{
                    name:'Alice'
                }
            }]
        }
    ]
}
config.plugins = [
    new webpack.HotModuleReplacementPlugin({
        title:'Hot Module Replacement'
    }),
    // new CleanWebpackPlugin(paths [, {options}])
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
        filename: 'day1.html',
        template: './src/challengs/day1.html',
        inject: 'body',
        hash: true,
        chunks: ['day1']
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        "window.jQuery": "jquery"
      })
]
config.devServer = {
    // inline: true,
    port:9000,
    hot:true,
    compress: true,
    inline: true,
    contentBase:'./dist',
    historyApiFallback: {
        rewrites: [
          { from: /^\/$/, to: '/day1.html' },
        //   { from: /^\/subpage/, to: '/views/subpage.html' },
        //   { from: /./, to: '/views/404.html' }
        ]
      }
}

module.exports = config;