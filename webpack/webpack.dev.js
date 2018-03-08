const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    "bundle": path.join(__dirname, '..', 'app', 'index.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'build')
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'build'),
    historyApiFallback: false,
    hot: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'extract-loader', 'css-loader' ],
      },
      {
        test: /\.scss$/,
        use: [
          {
              loader: "style-loader" // creates style nodes from JS strings
          }, 
          {
              loader: "css-loader" // translates CSS into CommonJS
          },
          {
              loader: "sass-loader" // compiles Sass to CSS
          }
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }  
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;