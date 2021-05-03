var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


const entry = './src/ui/index.js';
const output = {
    clean: true,
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./public'),
    publicPath: '/public/'
};
const modules = {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        },
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
          },
          exclude: /node_modules/
      },{
          test : /\.html$/,
          loader: 'html-loader'
      }
    ]
};
const plugins = [
    // new HtmlWebpackPlugin({
    //     inject: true,
    //     template: 'public/index.html'
    //   })
];

module.exports = {
    mode: 'development',
    plugins: plugins,    
    entry:entry, 
    output:output,
    module:modules,
    devServer: {
        contentBase: './public',
      },
}