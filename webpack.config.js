var path = require('path');
const entry = './src/ui/index.js';
const output = {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js',
    publicPath: '/public'
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

module.exports = {
    mode: "development",
    entry:entry, 
    output:output,
    module:modules
}