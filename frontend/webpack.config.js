const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const port = process.env.PORT || 3001;
require('dotenv').config();
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  resolve:{
    extensions: ['.tsx','.ts','.js'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [

      // First Rule
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
         { loader:'babel-loader'},
        ],
      },

      // Second Rule
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new Dotenv(),
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true
  }
};