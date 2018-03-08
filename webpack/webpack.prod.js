const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: {
    bundle: path.join(__dirname, '..', 'app', 'index.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '..', 'build')
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
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
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
    new HtmlWebpackPlugin({
        title: 'GetLinks-frontendSkill',
        template: path.join(__dirname, '..', 'app', 'index.ejs'),
        favicon: path.join(__dirname, '..', 'app', 'assert', 'favicon.png')
    }),
    new ExtractTextPlugin('style.css')
  ],
};

module.exports = config;