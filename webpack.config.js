const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const SRC_DIR = __dirname + '/src';
const DIST_DIR = __dirname + '/dist';

module.exports = {
  entry: [
    SRC_DIR + '/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
            },
          },
        ]
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: { minimize: true }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/index.html',
      filename: './index.html',
    })
  ],
  devServer: {
    contentBase: DIST_DIR,
    hot: true,
    port: 9000,
    historyApiFallback: true
  }
};